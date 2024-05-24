import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TicketService} from "../../services/ticket.service";
import {SignupService} from "../../services/signup.service";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  tickets: any = [];
  signInId!: number;
  userinfo: any = {
    id: '',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed: ""
  }
  buyForm!: FormGroup;



  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private ticketService: TicketService,
    private signupService: SignupService) {
  }

  ngOnInit() {
    this.buyForm = this.fb.group({
      number:'',
    });
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
      this.signInId = +params['signInId'];
      console.log('Extracted userId:', this.signInId);
      this.getUserDetails();
      this.getUserTickets();
    });
  }

  buyTicket(): void {
    if (this.buyForm.valid) {
      const ticket = this.buyForm.value;
      if (ticket.number <6 && ticket.number >0) {
        this.ticketService.buyTicket(this.signInId, ticket.number).subscribe(
          response => {
            this.snackBar.open(ticket.number + "tickets bought successfully!", "close", {
              duration: 10000,
              verticalPosition: 'top'
            });
            this.buyForm.reset();
            this.router.navigate(['/home', this.signInId]);
          },
          error => {
            console.error("Error buying tickets:", error);
            this.snackBar.open('An error occurred. Please try again.', 'close', {
              duration: 4000,
              verticalPosition: 'top'
            });
          }
        )
      } else {
        this.snackBar.open('You can only buy a positive number of tickets maxed by 5 tickets at a time.', 'close', {
          duration: 4000,
          verticalPosition: 'top'
        });
      }
    }
    else {
      this.snackBar.open('Please fill out all required fields.', 'close', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }
  }
  getUserTickets(): void {
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return;
    }
    // Fetch user tickets using the service
    this.ticketService.getAllTicketsOfUser(this.signInId).subscribe(
      (res: any) => {
        console.log('Fetched user tickets:', res);
        this.tickets = res;
        console.log('Tickets:', this.tickets);
        if(this.tickets>0){
          console.log('first ticket :', this.tickets[0]);
        }
      },
      (error: any) => {
        console.error("Error fetching user tickets:", error);
      }
    );
  }
  getUserDetails(): void {
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return;
    }
    // Fetch user details using the service
    this.signupService.getById(this.signInId).subscribe(
      (res: any) => {
        console.log('Fetched user details:', res);
        this.userinfo = res;
      },
      (error: any) => {
        console.error("Error fetching user by ID:", error);
      }
    );
  }
}
