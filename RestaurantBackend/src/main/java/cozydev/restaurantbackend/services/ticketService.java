package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.entity.Ticket;
import cozydev.restaurantbackend.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ticketService {
    private final TicketRepository ticketRepository;
    @Autowired
    public ticketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    public Ticket findByTicket_id(Long id) {
        return ticketRepository.findByTicket_id(id);
    }
    public Ticket findByPrice(int price) {
        return ticketRepository.findByPrice(price);
    }
    public Ticket findByState(boolean state) {
        return ticketRepository.findByState(state);
    }
    public Ticket findByExpirationDate(Ticket expirationDate) {
        return ticketRepository.findByExpirationDate(expirationDate);
    }
}
