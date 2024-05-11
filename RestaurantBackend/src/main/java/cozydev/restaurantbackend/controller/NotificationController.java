package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.Notifcation;
import cozydev.restaurantbackend.services.NotificationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Notifications")
public class NotificationController {

    private final NotificationService notificationService ;
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping
    public Notifcation notifCreation(Notifcation notifcation){
        return notificationService.notifCreation(notifcation);
    }

    @GetMapping
    public List<Notifcation> getAllNotifications(){
        return notificationService.getNotifications();
    }

    @GetMapping("/{notifId}")
    public Optional<Notifcation> getNotifById(@PathVariable long notifId){
        return notificationService.getNotificationById(notifId);
    }

    @GetMapping("/{userId}")
    public List<Notifcation> getNotificationsByUserId(@RequestBody Long userId){
        return this.notificationService.getNotificationsByUserId(userId);
    }

    @DeleteMapping("/{notifId}")
    public void deleteNotif(@PathVariable long notifId){
        notificationService.deleteNotifcation(notifId);
    }


}
