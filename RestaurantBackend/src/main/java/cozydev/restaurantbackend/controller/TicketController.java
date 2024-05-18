package cozydev.restaurantbackend.controller;


import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.services.TicketService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Tickets")
public class TicketController {
    private final TicketService ticketService ;
    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping
    public List<Ticket> getAllTickets(){
        return ticketService.getAllTicket();
    }

    @PostMapping
    public Ticket addTicket(@RequestBody Ticket ticket) {
        return ticketService.addTicket(ticket);
    }

    @PostMapping("/user/{userId}")
    public Ticket addTicket(@RequestBody Ticket ticket ,@PathVariable Long userId) {
        return ticketService.addTicket(ticket, userId);
    }

    @GetMapping("/user/{userId}")
    public List<Ticket> getAllTicketByUserId(@PathVariable Long userId){
        return ticketService.getAllTicketByUserId(userId);
    }

    @GetMapping("/{idTicket}")
    public Optional<Ticket> getTicketById(@PathVariable long idTicket){
        return ticketService.getTicketById(idTicket);
    }

    @DeleteMapping("/{idTicket}")
    public void deleteTicket(@PathVariable long idTicket){
         ticketService.deleteTicket(idTicket);
    }

    @GetMapping("/count/{idUser}")
    public int countAllTicketByUserId(@PathVariable Long idUser){
        return ticketService.countAllTicketByUserId(idUser);
    }

    @GetMapping("/{senderUserId1}/{receiverUserId2}")
    public void sendTicket(@PathVariable Long senderUserId1, @PathVariable Long receiverUserId2){
        ticketService.sendTicket(senderUserId1, receiverUserId2);
    }

    @PostMapping("/buy/{userId}/{count}")
    public void buyTicket(@PathVariable Long userId,@PathVariable Integer count){
      ticketService.buyTicket(userId, count);
    }
    
}
