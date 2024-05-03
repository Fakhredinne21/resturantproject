package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.Subscription;
import cozydev.restaurantbackend.services.SubscriptionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Subscription")
public class SubscriptionController {
    private final SubscriptionService subscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    public List<Subscription> getAllSubs(){
        return this.subscriptionService.getAllSubs();
    }
}
