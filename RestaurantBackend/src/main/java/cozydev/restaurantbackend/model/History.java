package cozydev.restaurantbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity @Getter @Setter
public class History {

    @EmbeddedId
    private HisotryId id;

    @ManyToOne
    @MapsId("userId")
    @JsonBackReference
    private User user;

    @ManyToOne
    @MapsId("ticketId")
    @JsonBackReference
    private Ticket ticket;

    private LocalDateTime occuredAt;
}
