package cozydev.restaurantbackend.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Embeddable @Getter @Setter
public class ReviewId{
    private Long userId;
    private Long mealId;
}
