package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.Notifcation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notifcation , Long> {
}
