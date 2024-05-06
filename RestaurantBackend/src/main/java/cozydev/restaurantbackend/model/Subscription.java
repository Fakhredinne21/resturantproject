package cozydev.restaurantbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;


@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Subscription implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cardId;
    private int priceTicket;
    @Temporal(TemporalType.DATE)
    private Date subscriptionDate;
    @Temporal(TemporalType.DATE)
    private Date endSubscriptionDate;


}
