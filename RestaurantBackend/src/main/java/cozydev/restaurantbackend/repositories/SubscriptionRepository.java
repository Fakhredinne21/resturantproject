package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.Optional;


public interface SubscriptionRepository extends JpaRepository<Subscription, Long>{
}
