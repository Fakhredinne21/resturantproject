package cozydev.restaurantbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
@Entity @Getter @Setter @RequiredArgsConstructor
public class UserMeal implements Serializable {
    @EmbeddedId
    private UserMealId id;

    @MapsId("userId")
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @MapsId("mealId")
    @ManyToOne
    @JoinColumn(name = "meal_id")
    private Meal meal;

    private String rating; // additional attribute
}
