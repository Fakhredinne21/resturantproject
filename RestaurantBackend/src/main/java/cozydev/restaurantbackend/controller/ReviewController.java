package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.Meal;
import cozydev.restaurantbackend.model.Review;
import cozydev.restaurantbackend.model.ReviewId;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.services.MealService;
import cozydev.restaurantbackend.services.ReviewService;
import cozydev.restaurantbackend.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;
    private final UserService userService;
    private final MealService mealService;
    public ReviewController(ReviewService reviewService,
                            UserService userService,
                            MealService mealService) {
        this.userService = userService;
        this.mealService = mealService;
        this.reviewService = reviewService;
    }
    @PutMapping("/{userId}/{mealId}")
    public Review updateReview(@PathVariable Long userId, @PathVariable Long mealId, @RequestBody Review reviewDetails) {
        ReviewId id = new ReviewId(userId, mealId);
        Optional<Review> reviewOptional = reviewService.getReviewById(id);
        if(!reviewOptional.isPresent()) {
            throw new IllegalArgumentException("Review not found");
        }
        Review review = reviewOptional.get();
        review.setRating(reviewDetails.getRating());

        return reviewService.addReview(review);
    }

    @PostMapping("/{userId}/{mealId}")
    public Review createReview(@RequestBody Review review, @PathVariable Long userId, @PathVariable Long mealId) {

        Optional<User> userOptional = userService.getUserById(userId);
        Optional<Meal> mealOptional = mealService.getMealById(mealId);

        if (!userOptional.isPresent() || !mealOptional.isPresent()) {
            throw new IllegalArgumentException("User or Meal not found");
        }

        User user = userOptional.get();
        Meal meal = mealOptional.get();

        ReviewId reviewId = new ReviewId(userId, mealId);
        review.setId(reviewId);
        review.setUser(user);
        review.setMeal(meal);

        return reviewService.addReview(review);
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/user/{userId}")
    public List<Review> getReviewsByUser(@PathVariable Long userId) {
        return reviewService.getReviewsByUser(userId);
    }

    // Fetch reviews for a specific meal
    @GetMapping("/meal/{mealId}")
    public List<Review> getReviewsForMeal(@PathVariable Long mealId) {
        return reviewService.getReviewsForMeal(mealId);
    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable ReviewId id) {
        reviewService.deleteReview(id);
    }
}
