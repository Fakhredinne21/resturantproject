package cozydev.restaurantbackend.auth;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthenticationResponse {
    private String token;
    private Long userId;

    public AuthenticationResponse(String token, Long userId) {
        this.token = token;
        this.userId = userId;
    }
}
