package cozydev.restaurantbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;


@Entity
@Table(name="Subscription")
@Getter
@Setter
@ToString
public class Subscription implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Card_id;
    private int priceTicket;
    @Temporal(TemporalType.DATE)
    private Date subscriptionDate;
    @Temporal(TemporalType.DATE)
    private Date endSubscriptionDate;

    public Subscription() {
    }

    public Subscription(Long Card_id, int priceTicket, Date subscriptionDate, Date endSubscriptionDate) {
        this.Card_id = Card_id;
        this.priceTicket = priceTicket;
        this.subscriptionDate = subscriptionDate;
        this.endSubscriptionDate = endSubscriptionDate;
    }
}
