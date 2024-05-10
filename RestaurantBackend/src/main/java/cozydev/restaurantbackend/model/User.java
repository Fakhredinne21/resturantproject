package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Entity @Getter @Setter @ToString @RequiredArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private int phoneNumber;
    private String email;
    private Boolean subscription ;
    private String password;
    private boolean status;
    @Temporal(TemporalType.DATE)
    private Date dateCreation;
    @Temporal(TemporalType.DATE)
    private Date updatedAt ;
    @Lob
    private byte[] image;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Ticket> tickets;

    @ManyToMany
    @JsonBackReference
    private List<Meal> meals;

    @ManyToOne()
    @JsonManagedReference
    private Notifcation notifcations ;

}
