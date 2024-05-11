package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class Notifcation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long notifId ;
    @Enumerated(EnumType.STRING)
    private Type title ;
    private String text ;

}
