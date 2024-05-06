package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.services.TicketService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tickets")
public class TicketController {
        private final TicketService ticketService;
        public TicketController(TicketService ticketService) {
            this.ticketService = ticketService;
        }

        @GetMapping
        public List<Ticket> getTicket(){
            return this.ticketService.getTicket();
        }

        @GetMapping("/{idTicket}")
        public Optional<Ticket> getTicketByUserId(@PathVariable Long idTicket){
            return this.ticketService.getTicketById(idTicket);
        }

}
