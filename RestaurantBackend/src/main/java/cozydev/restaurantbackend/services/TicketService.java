package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.repositories.TicketRepository;
import cozydev.restaurantbackend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    private final TicketRepository ticketRepository ;
    private final UserRepository userRepository;
    public TicketService(
            UserRepository userRepository,
            TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;

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
    public Ticket addTicket(Ticket ticket ,Long userId){
        ticket.setUser(userRepository.findById(userId).orElse(null));
        return ticketRepository.save(ticket);
    }

    public int countAllTicketByUserId(Long userId) {
        return (int) ticketRepository.findAll().stream()
                .filter(ticket -> ticket.getUser() != null && ticket.getUser().getId().equals(userId))
                .count();
    }
}
