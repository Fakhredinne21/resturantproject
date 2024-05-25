package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Notifcation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long notifId ;
    @Enumerated(EnumType.STRING)
    private Type title ;
    private String text ;

    @ManyToOne
    @JsonIgnore
    private User user;

}
