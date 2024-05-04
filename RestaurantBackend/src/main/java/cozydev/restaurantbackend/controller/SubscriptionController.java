package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.Subscription;
import cozydev.restaurantbackend.services.SubscriptionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Subscription")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;
    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @GetMapping
    public List<Subscription> getAllSubs(){
        return this.subscriptionService.getAllSubs();
    }

    @GetMapping("/{id}")
    public Optional<Subscription> getSubsById(@PathVariable Long id){
        return this.subscriptionService.getSubsById(id);
    }

    @GetMapping("/{date}")
    public Optional<Subscription> getBySubscriptionDate(@PathVariable Date date){
        return this.subscriptionService.getBySubscriptionDate(date);
    }

}
