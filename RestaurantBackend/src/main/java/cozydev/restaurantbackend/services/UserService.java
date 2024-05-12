package cozydev.restaurantbackend.services ;

import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.repositories.MealRepository;
import cozydev.restaurantbackend.repositories.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final MealRepository mealRepository ;

    public UserService(UserRepository userRepository, MealRepository mealRepository) {
        this.userRepository = userRepository;
        this.mealRepository = mealRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
    public User userCreation(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
}
