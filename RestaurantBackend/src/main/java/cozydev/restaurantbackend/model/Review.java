package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name="Review")
public class Review {
    @EmbeddedId
    private ReviewId id;

    @ManyToOne
    @MapsId("userId")
    @JsonBackReference
    private User user;

    @ManyToOne
    @MapsId("mealId")
    @JsonBackReference
    private Meal meal;

    private String rating;
}
