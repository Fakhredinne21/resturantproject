package cozydev.restaurantbackend.services;


import cozydev.restaurantbackend.repositories.TicketRepository;
import org.springframework.stereotype.Service;

@Service
public class ticketService {
    private final TicketRepository ticketRepository;
    public ticketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

}
