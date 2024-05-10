package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Notifcation;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.repositories.NotificationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository ;

    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public List<Notifcation> getNotifications() {
        return notificationRepository.findAll();
    }
    public Notifcation notifCreation(Notifcation notifcation){
        return notificationRepository.save(notifcation);
    }

    public Optional<Notifcation> getNotificationById(Long id) {
        return notificationRepository.findById(id);
    }

    public void deleteNotifcation(long idTicket){
        notificationRepository.deleteById(idTicket);
    }
}
