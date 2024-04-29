package cozydev.restaurantbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table (name = "Ticket")
@Getter
@Setter
@ToString
public class Ticket implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticketid;
    private int price;
    private boolean state;
    @Temporal(TemporalType.DATE)
    private Date expirationDate;

    @ManyToOne
    @JoinColumn(name = "id")
    private User user;

    public Ticket() {
    }

    public Ticket(Long Ticket_id, int price, boolean State, Date ExpirationDate , User user) {
        this.ticketid = Ticket_id;
        this.price = price;
        this.state = State;
        this.expirationDate = ExpirationDate;
        this.user = user;
    }
}
