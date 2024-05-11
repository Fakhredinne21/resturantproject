package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Collection;
import java.util.List;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long mealId ;
        private String description ;
        private long price ;

    @ManyToMany(mappedBy = "meals")
    @JsonIgnore
    private List<User> users;

    @OneToMany(mappedBy = "meal")
    @JsonIgnore
    private List<Review> reviews;
}
