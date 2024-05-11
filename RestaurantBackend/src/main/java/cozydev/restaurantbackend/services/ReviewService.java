package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Review;
import cozydev.restaurantbackend.model.ReviewId;
import cozydev.restaurantbackend.repositories.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return this.reviewRepository.findAll();
    }

    public Optional<Review> getReviewById(ReviewId id) {
        return this.reviewRepository.findById(id);
    }

    public Review createReview(Review review) {
        return this.reviewRepository.save(review);
    }

    public Review updateReview(ReviewId id, Review review) {
        Optional<Review> optionalReview = this.reviewRepository.findById(id);
        return this.reviewRepository.save(optionalReview.get());
    }

    public void deleteReview(ReviewId id) {
        this.reviewRepository.deleteById(id);
    }
}
