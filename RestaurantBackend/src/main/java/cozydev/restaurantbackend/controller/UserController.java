package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User userCreation(@RequestBody User user) {
        return userService.userCreation(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public Optional <User> getUserById(@PathVariable  Long userId) {
        return userService.getUserById(userId);
    }
}
