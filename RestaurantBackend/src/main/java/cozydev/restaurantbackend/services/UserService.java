package cozydev.restaurantbackend.services ;

import cozydev.restaurantbackend.model.Role;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.repositories.MealRepository;
import cozydev.restaurantbackend.repositories.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository, MealRepository mealRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User userCreation(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public List<User> getTeachers() {
        return this.userRepository.findAll().stream().filter(e -> e.getRole().compareTo(Role.Teacher) == 0 ).toList();
    }

    public List<User> getStudents() {
        return this.userRepository.findAll().stream().filter(e -> e.getRole().compareTo(Role.Student) == 0 ).toList();
    }
}
