package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.model.User;
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

    public int sendTicket(Long senderUserId1, Long receiverUserId2) {
        User sender = userRepository.findById(senderUserId1).orElse(null);
        if(sender.getTickets().isEmpty()){
            return 0;
        }
        User receiver = userRepository.findById(receiverUserId2).orElse(null);
        Ticket ticket = sender.getTickets().getFirst();
        sender.getTickets().remove(ticket);
        receiver.getTickets().add(ticket);
        ticket.setUser(receiver); // update the ticket's user

        userRepository.save(sender);
        userRepository.save(receiver);
        ticketRepository.save(ticket);
        return 1;
    }

    public void buyTicket(Long userId, Integer count) {
        User user = userRepository.findById(userId).orElse(null);
        int numberOfTicketsToBuy = (count == null || count == 0) ? 5 : count;
        for (int i = 0; i < numberOfTicketsToBuy; i++) {
            Ticket ticket = new Ticket();
            ticket.setUser(user);
            ticketRepository.save(ticket);
        }
    }
}
