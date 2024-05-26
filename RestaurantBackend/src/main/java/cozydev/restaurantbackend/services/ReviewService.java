package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Meal;
import cozydev.restaurantbackend.model.Review;
import cozydev.restaurantbackend.model.ReviewId;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.repositories.MealRepository;
import cozydev.restaurantbackend.repositories.ReviewRepository;
import cozydev.restaurantbackend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    private ReviewRepository reviewRepository;
    private UserRepository userRepository;
    private MealRepository mealRepository;

    public ReviewService(ReviewRepository reviewRepository,
                         UserRepository userRepository,
                         MealRepository mealRepository){
        this.reviewRepository = reviewRepository;
        this.mealRepository = mealRepository;
        this.userRepository = userRepository;
    }
    public List<Review> getAllReviews() {
        return this.reviewRepository.findAll();
    }

    public Optional<Review> getReviewById(ReviewId id) {
        return this.reviewRepository.findById(id);
    }

    public Review createReview(Long userId , Long mealId ,String rating) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id " + userId));

        Meal meal = mealRepository.findById(mealId)
                .orElseThrow(() -> new IllegalArgumentException("Meal not found with id " + mealId));

        Review review = new Review();
        review.setId(new ReviewId(userId, mealId));
        review.setUser(user);
        review.setMeal(meal);
        review.setRating(rating);

        return addReview(review);
    }

        public Review addReview(Review review){
            return this.reviewRepository.save(review);
        }

    public Review updateReview(ReviewId id, String rating) {

        Review existingReview = reviewRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Review not found with id " + id));

        existingReview.setRating(rating);
        return reviewRepository.save(existingReview);
    }

    public void deleteReview(ReviewId id) {
        this.reviewRepository.deleteById(id);
    }

    public List<Review> getReviewsByUser(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (!user.isPresent()) {
            throw new IllegalArgumentException("User not found with id " + userId);
        }
        return this.reviewRepository.findAll().stream().filter(review -> review.getUser().getUserId().equals(userId)).toList();
    }

    public List<Review> getReviewsForMeal(Long mealId) {
        Optional<Meal> meal = mealRepository.findById(mealId);
        if (!meal.isPresent()) {
            throw new IllegalArgumentException("Meal not found with id " + mealId);
        }
        return this.reviewRepository.findAll().stream().filter(review -> review.getId().getMealId().equals(mealId)).toList();
    }
}
