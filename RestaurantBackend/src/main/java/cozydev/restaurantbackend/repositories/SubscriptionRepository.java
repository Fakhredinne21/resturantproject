package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SubscriptionRepository extends JpaRepository<Subscription, Long>{}
