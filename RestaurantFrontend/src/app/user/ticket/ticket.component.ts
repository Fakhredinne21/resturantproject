import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TicketService} from "../../services/ticket.service";
import {SignupService} from "../../services/signup.service";
import {TicketControllerService} from "../../servs/services/ticket-controller.service";
import {UserControllerService} from "../../servs/services/user-controller.service";
import {TokenService} from "../../servs/token/token.service";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  numberticket!:number;
  userId!: number;
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
  ticket!:FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private ticketservice: TicketService,
    private signupService: UserControllerService,
    private tokenService :TokenService,
  ) {
  }
  logout(){
    localStorage.removeItem('userId');
    this.tokenService.token == null ;
    this.router.navigate(['login']);
  }
  ngOnInit() {
    this.buyForm = this.fb.group({
      number:'',
    });
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = parseInt(userIdStr, 10);
      console.log('Extracted userId:', this.userId);
    }
      this.getUserDetails();
  }
  getUserDetails(): void {
    if (!this.userId) {
      this.router.navigate(['login']);
    }
    // Fetch user details using the service
    this.signupService.getUserById({userId:this.userId}).subscribe(
      (res: any) => {
        console.log('Fetched user details:', res);
        this.userinfo = res;
      },
      (error: any) => {
        console.error("Error fetching user by ID:", error);
      }
    );
  }

  /*buyTicket():void{
    this.ticketservice.buyTicket({userId:this.userinfo.id,count:this.numberticket}).subscribe({ next:(res)=>{
      this.snackBar.open(this.numberticket + "tickets bought successfully!", "close", {
        duration: 10000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/ticket', this.userId]);
    }
    });
  }*/
  /*getUserTickets(): void {
    if (!this.userId) {
      console.log('Invalid userId:', this.userId);
      return;
    }
    // Fetch user tickets using the service
    this.ticketService.getAllTicketsOfUser(this.userId).subscribe(
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
  }*/
  buyTicket(): void {
    if (this.buyForm.valid) {
      const ticket = this.buyForm.value;
      if (ticket.number <6 && ticket.number >0) {
        this.ticketservice.buyTicket(this.userId, ticket.number).subscribe(
          response => {
            this.snackBar.open(ticket.number + "tickets bought successfully!", "close", {
              duration: 10000,
              verticalPosition: 'top'
            });
            this.buyForm.reset();
            this.router.navigate(['home']);
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

  /*getUserDetails(): void {
    if (!this.userId) {
      console.log('Invalid userId:', this.userId);
      return;
    }
    // Fetch user details using the service
    this.signupService.getById(this.userId).subscribe(
      (res: any) => {
        console.log('Fetched user details:', res);
        this.userinfo = res;
      },
      (error: any) => {
        console.error("Error fetching user by ID:", error);
      }
    );
  }*/
}
