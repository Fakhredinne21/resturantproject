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
    private Long Ticket_id;
    private int price;
    private boolean State;
    @Temporal(TemporalType.DATE)
    private Date ExpirationDate;

    public Ticket() {
    }

    public Ticket(Long Ticket_id, int price, boolean State, Date ExpirationDate) {
        this.Ticket_id = Ticket_id;
        this.price = price;
        this.State = State;
        this.ExpirationDate = ExpirationDate;
    }
}
