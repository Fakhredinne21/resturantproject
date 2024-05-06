package cozydev.restaurantbackend.services;


import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.repositories.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;
    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<Ticket> getTicket(){
        return this.ticketRepository.findAll();
    }

    public Optional<Ticket> getTicketById(Long Id) {
        return this.ticketRepository.findById(Id);
    }
}
