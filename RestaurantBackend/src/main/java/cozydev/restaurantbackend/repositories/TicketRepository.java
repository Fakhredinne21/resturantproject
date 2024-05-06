package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findByUser(User user);
}
