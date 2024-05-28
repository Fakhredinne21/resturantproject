package cozydev.restaurantbackend.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthenticationRequest {
    @NotEmpty(message = "email is mendatory")
    @NotBlank(message = "email is mendatory")
    private String email;
    @NotEmpty(message = "password is mendatory")
    @NotBlank(message = "password is mendatory")
    @Size(min = 8,message = "Password should be 8 caracteres long minimum")
    private String password ;
    private String role;
}
