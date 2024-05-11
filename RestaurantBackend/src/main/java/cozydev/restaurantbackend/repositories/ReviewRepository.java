package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.Review;
import cozydev.restaurantbackend.model.ReviewId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review , ReviewId> { }
