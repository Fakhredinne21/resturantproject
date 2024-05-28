package cozydev.restaurantbackend.auth;

import cozydev.restaurantbackend.email.EmailService;
import cozydev.restaurantbackend.email.EmailTemplateName;
import cozydev.restaurantbackend.model.Role;
import cozydev.restaurantbackend.model.Token;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.repositories.RoleRepository;
import cozydev.restaurantbackend.repositories.TokenRepository;
import cozydev.restaurantbackend.repositories.UserRepository;
import cozydev.restaurantbackend.security.JwtService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.hibernate.sql.ast.tree.expression.Collation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final EmailService emailService;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Value("${application.mailing.frontend.activation}")
    private String activationUrl ;

    public void register(RegistrationRequest request) throws MessagingException {
        Role userRole;
        if("ADMIN".equalsIgnoreCase(request.getRole())){
            userRole = roleRepository.findByName("ADMIN")
                    .orElseThrow(()->new IllegalStateException("ADMIN not found"));
        }else {
            userRole = roleRepository.findByName("USER")
                    .orElseThrow(() -> new IllegalStateException("Role User was not found"));
        }
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .roles(List.of(userRole))
                .build();
        userRepository.save(user);
        sendValidationEmail(user);
    }

    private void sendValidationEmail(User user) throws MessagingException {
        var newToken = generateAndSaveActivationToken(user);

        emailService.senEmail(
                user.getEmail(),
                user.fullName(),
                EmailTemplateName.ACTIVATE_ACCOUNT,
                activationUrl,
                newToken,
                "Account_activation"

        );
    }

    private String generateAndSaveActivationToken(User user) {

        String generatedToken = generateActivationCode(6);
        var token = Token.builder()
                .token(generatedToken)
                .createdAt(LocalDateTime.now())
                .expriresAt(LocalDateTime.now().plusMinutes(15))
                .user(user)
                .build();
        tokenRepository.save(token);
        return generatedToken;
    }
    private String generateActivationCode(int length) {
        String charachter = "0123456789";
        StringBuilder codeBuilder = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();
        for (int i = 0; i < length; i++) {
            int randomIndex = secureRandom.nextInt(charachter.length());//0..9
            codeBuilder.append(charachter.charAt(randomIndex));

        }
        return codeBuilder.toString();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        var auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = (User) auth.getPrincipal();

        // Extract roles as list of strings
        List<String> roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toList());

        var claims = new HashMap<String, Object>();
        claims.put("fullName", user.fullName());
        var jwtToken = jwtService.generateToken(claims, user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .userId(user.getUserId())
                .roles(roles)  // Directly assign roles
                .build();
    }

    public void activateAccount(String token) throws MessagingException {
        Token savedToken = tokenRepository.findByToken(token)
                .orElseThrow(()-> new RuntimeException("Invalid token "));
        if(LocalDateTime.now().isAfter(savedToken.getExpriresAt())){
            sendValidationEmail(savedToken.getUser());
            throw new RuntimeException("Activation has expired, a new token has been sent");
        }
        var user = userRepository.findById(savedToken.getUser().getUserId())
                .orElseThrow(()-> new UsernameNotFoundException("user not found"));
        user.setEnabled(true);
        userRepository.save(user);
        savedToken.setValidatedAt(LocalDateTime.now());
        tokenRepository.save(savedToken);
    }



}
