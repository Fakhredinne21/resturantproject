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

    @GetMapping("/{id}")
    public Optional<Review> getReviewById(@PathVariable ReviewId id) {
        return reviewService.getReviewById(id);
    }



//    @PostMapping
//    public Review createReview(@RequestBody Review review) {
//        return reviewService.createReview(review);
//    }
//
//    @PutMapping("/{id}")
//    public Review updateReview(@PathVariable ReviewId id, @RequestBody Review review) {
//        return reviewService.updateReview(id, review);
//    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable ReviewId id) {
        reviewService.deleteReview(id);
    }
}
