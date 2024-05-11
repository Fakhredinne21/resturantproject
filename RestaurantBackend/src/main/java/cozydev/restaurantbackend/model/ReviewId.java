package cozydev.restaurantbackend.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import lombok.*;

@Embeddable @Getter @Setter
@RequiredArgsConstructor
public class ReviewId{
    private Long userId;
    private Long mealId;


    public ReviewId(Long userId, Long mealId) {
        this.mealId = mealId;
        this.userId = userId;
    }
}
