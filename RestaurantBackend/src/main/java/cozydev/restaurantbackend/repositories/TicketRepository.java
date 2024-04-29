package cozydev.restaurantbackend.repositories;

import cozydev.restaurantbackend.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    Ticket findByTicket_id(Long id);
    Ticket findByPrice(int price);
    Ticket findByState(boolean state);
    Ticket findByExpirationDate(Ticket expirationDate);
}
