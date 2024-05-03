package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
