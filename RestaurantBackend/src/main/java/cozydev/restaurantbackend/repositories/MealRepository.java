package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealRepository extends JpaRepository<Meal,Long> {
}
