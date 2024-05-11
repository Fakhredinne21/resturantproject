package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Review")
@Getter
@Setter
public class Review {
    @EmbeddedId
    private ReviewId id;

    @ManyToOne
    @MapsId("userId")
    @JsonIgnore
    private User user;

    @ManyToOne
    @MapsId("mealId")
    @JsonIgnore
    private Meal meal;

    private String rating;
}
