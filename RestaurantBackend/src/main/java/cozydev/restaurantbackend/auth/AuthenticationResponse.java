package cozydev.restaurantbackend.auth;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class AuthenticationResponse {
    private String token;
    private Long userId;
    private List<String> roles ;

    public AuthenticationResponse(String token, Long userId,List<String> roles) {
        this.token = token;
        this.userId = userId;
        this.roles= roles;

        //
    }
}
