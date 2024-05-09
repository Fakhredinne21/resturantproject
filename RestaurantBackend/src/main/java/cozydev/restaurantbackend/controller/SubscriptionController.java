package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.Subscription;
import cozydev.restaurantbackend.services.SubscriptionService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Subscription")
@CrossOrigin("http://localhost:4200/*")
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

    @GetMapping("/{idSubs}/date")
    public Date getBySubscriptionDate(@PathVariable long idSubs){
        return this.subscriptionService.getBySubscriptionDate(idSubs);
    }



}
