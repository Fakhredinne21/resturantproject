package cozydev.restaurantbackend.model;


import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.LocalDateTime;
import java.util.List;
import java.io.Serializable;


@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class User implements Serializable {
    //Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    @CreatedDate
    private LocalDateTime createdDate;


    @Lob
    private byte[] profileImage;
    @Enumerated(EnumType.STRING)
    private Role role;
    private Boolean isSubscribed;


    //Review
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Review> reviews;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Ticket> tickets;

}
