package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface SubscriptionRepository extends JpaRepository<SubscriptionRepository, Long>{
    Subscription findByCard_id(Long id);
    Subscription findByPriceTicket(int priceTicket);
    Subscription findBySubscriptionDate(Date subscriptionDate);
    Subscription findByEndSubscriptionDate(Date endSubscriptionDate);
}
