package cozydev.restaurantbackend.services;

import cozydev.restaurantbackend.model.HisotryId;
import cozydev.restaurantbackend.model.History;
import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.repositories.HistoryRepository;
import cozydev.restaurantbackend.repositories.TicketRepository;
import cozydev.restaurantbackend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository ;
    private final UserRepository userRepository;
    private final HistoryRepository historyRepository;
    private final Logger logger=  LoggerFactory.getLogger(TicketService.class);

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


@Transactional
   public Boolean sendTicket(Long senderId, Long receiverId) {
        Optional<User> Optsender = userRepository.findById(senderId);
        Optional<User> Optreceiver = userRepository.findById(receiverId);

        if (Optsender.isPresent() && Optreceiver.isPresent()){
            User sender = Optsender.get();
            User receiver=Optreceiver.get();

            if(sender.getTickets().isEmpty()){
                logger.warn("srnder has no tickets to transfer");
                return false;
            }

            Ticket ticket = sender.getTickets().iterator().next();
            sender.getTickets().remove(ticket);
            receiver.getTickets().add(ticket);
            ticket.setUser(receiver);

            userRepository.save(sender);
            userRepository.save(receiver);
            ticketRepository.save(ticket);

            History history = new History();
            history.setId(new HisotryId(receiverId,senderId, ticket.getId()));
            history.setSender(sender);
            history.setReciever(receiver);
            history.setTicket(ticket);
            history.setOccuredAt(LocalDateTime.now());
            historyRepository.save(history);
        }
       return true;
    }

    public void buyTicket(Long userId, Integer count) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            throw new IllegalArgumentException("User not found");
        }
        
        int numberOfTicketsToBuy = (count == null || count == 0) ? 5 : count;
        if(optionalUser.isPresent()){
            for (int i = 0; i < numberOfTicketsToBuy; i++) {
                Ticket ticket = new Ticket();
                ticket.setUser(optionalUser.get());
                ticketRepository.save(ticket);
            }

        }
    }

   public List<Ticket> getAllTicketByUserId(Long userId) {
        return ticketRepository.findAll().stream()
                .filter(ticket -> ticket.getUser() != null && ticket.getUser().getId().equals(userId))
                .toList();
    }

}
