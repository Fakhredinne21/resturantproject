package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.Review;
import cozydev.restaurantbackend.model.ReviewId;
import cozydev.restaurantbackend.services.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/{idReview}")
    public Optional<Review> getReviewById(@PathVariable ReviewId idReview) {
        return reviewService.getReviewById(idReview);
    }

    @PostMapping
    public Review createReview(@RequestBody Review review) {
        return reviewService.createReview(review);
    }

    @PutMapping("/{idReview}")
    public Review updateReview(@PathVariable ReviewId idReview, @RequestBody Review review) {
        return reviewService.updateReview(idReview, review);
    }

    @DeleteMapping("/{idReview}")
    public void deleteReview(@PathVariable ReviewId idReview) {
        reviewService.deleteReview(idReview);
    }
}
