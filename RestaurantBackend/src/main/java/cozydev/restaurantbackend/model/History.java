package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class History {

    @EmbeddedId
    private HisotryId id;

    @ManyToOne
    @MapsId("receiverId")
    @JsonBackReference
    private User reciever;

    @ManyToOne
    @MapsId("senderId")
    @JsonBackReference
    private User sender;

    @ManyToOne
    @MapsId("ticketId")
    @JsonBackReference
    private Ticket ticket;

    @CreatedDate
    @Column(nullable = false,updatable = false)
    private LocalDateTime occuredAt;
}
