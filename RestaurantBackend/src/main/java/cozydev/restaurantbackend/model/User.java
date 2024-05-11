package cozydev.restaurantbackend.model;


import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.io.Serializable;


@Entity @Getter @Setter @ToString @RequiredArgsConstructor

public class User implements Serializable {
    //Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    @Lob
    private byte[] profileImage;
    @Enumerated(EnumType.STRING)
    private Role role;
    private Boolean isSubscribed;



    //Relations:

    //OwnerShip
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Ticket> tickets;

    //Meals
    @ManyToMany
    @JsonIgnore
    private List<Meal> meals;

    //Notifications
    @OneToMany()
    @JsonIgnore
    private List<Notifcation> notifcations ;

    //Review
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Review> reviews;

//    private boolean status;
//    @Temporal(TemporalType.DATE)
//    private Date dateCreation;
//    @Temporal(TemporalType.DATE)
//    private Date updatedAt ;
}
