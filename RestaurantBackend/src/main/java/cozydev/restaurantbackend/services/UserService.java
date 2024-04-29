package cozydev.restaurantbackend.services ;

import cozydev.restaurantbackend.entity.User;
import cozydev.restaurantbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}
