package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.repositories.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    private final TicketRepository ticketRepository ;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }


    public List<Ticket> getAllTicket(){
        return ticketRepository.findAll();
    }


    public Optional<Ticket> getTicketById(long idTicket){
        return ticketRepository.findById(idTicket);
    }


    public void deleteTicket(long idTicket){
        ticketRepository.deleteById(idTicket);
    }

    public Ticket addTicket(Ticket ticket){
        return ticketRepository.save(ticket);
    }
}
