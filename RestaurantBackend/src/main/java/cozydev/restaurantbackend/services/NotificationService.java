package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Notifcation;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.repositories.NotificationRepository;
import cozydev.restaurantbackend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository ;
    private final UserRepository userRepository;

    public NotificationService(NotificationRepository notificationRepository, UserRepository userRepository) {
        this.notificationRepository = notificationRepository;
        this.userRepository = userRepository;
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

    public List<Notifcation> getNotificationsByUserId(Long userId) {
        Optional<User> user = this.userRepository.findById(userId);
        return user.get().getNotifcations();
    }
}
