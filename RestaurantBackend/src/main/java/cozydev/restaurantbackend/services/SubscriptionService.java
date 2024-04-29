package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.entity.Subscription;
import cozydev.restaurantbackend.repositories.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class SubscriptionService {
    private final SubscriptionRepository subscriptionRepository;
    @Autowired
    public SubscriptionService(SubscriptionRepository subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }
    public Subscription findByCard_id(Long id) {
        return  subscriptionRepository.findByCardid(id);
    }
    public Subscription findByPriceTicket(int priceTicket) {
        return subscriptionRepository.findByPriceTicket(priceTicket);
    }
    public Subscription findBySubscriptionDate(Date subscriptionDate) {
        return subscriptionRepository.findBySubscriptionDate(subscriptionDate);
    }
    public Subscription findByEndSubscriptionDate(Date endSubscriptionDate) {
        return subscriptionRepository.findByEndSubscriptionDate(endSubscriptionDate);
    }
}
