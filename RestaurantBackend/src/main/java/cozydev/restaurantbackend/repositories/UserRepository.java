package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{}
