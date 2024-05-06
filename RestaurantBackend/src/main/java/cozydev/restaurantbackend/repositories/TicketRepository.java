package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

}
