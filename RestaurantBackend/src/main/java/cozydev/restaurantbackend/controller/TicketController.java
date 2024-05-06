package cozydev.restaurantbackend.controller;

import cozydev.restaurantbackend.model.Ticket;
import cozydev.restaurantbackend.model.User;
import cozydev.restaurantbackend.services.TicketService;
import cozydev.restaurantbackend.services.UserService;
import java.util.Collections;
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
        private final UserService userService;
        public TicketController(TicketService ticketService, UserService userService) {
            this.userService = userService;
            this.ticketService = ticketService;
        }

        @GetMapping
        public List<Ticket> getTicket(){
            return this.ticketService.getTicket();
        }

        @GetMapping("/{idTicket}")
        public Optional<Ticket> getTicketByTicketId(@PathVariable Long idTicket){
            return this.ticketService.getTicketById(idTicket);
        }

        @GetMapping("/user/{userId}")
        public List<Ticket> getTicketByUserId(@PathVariable Long userId){
            User user = this.userService.getUserById(userId);
            if(user == null){
                return Collections.emptyList();
            }
            return this.ticketService.getTicketsByUser(user);
        }
}
