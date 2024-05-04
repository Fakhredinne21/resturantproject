package cozydev.restaurantbackend.model;

import jakarta.persistence.Embeddable;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@Embeddable
@RequiredArgsConstructor
public class UserMealId implements Serializable {
    private Long userId;
    private Long mealId;

    public UserMealId(Long userId, Long mealId) {
        this.userId = userId;
        this.mealId = mealId;
    }

}
