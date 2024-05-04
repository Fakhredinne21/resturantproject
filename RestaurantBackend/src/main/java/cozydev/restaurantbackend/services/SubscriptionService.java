package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Subscription;
import cozydev.restaurantbackend.repositories.SubscriptionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {
    private final SubscriptionRepository subscriptionRepository;
    public SubscriptionService(SubscriptionRepository subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }

    public List<Subscription> getAllSubs(){
        return subscriptionRepository.findAll();
    }

    public Optional<Subscription> getSubsById(long id) {
        return subscriptionRepository.findById(id);
    }
}
