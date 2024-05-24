import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../services/signup.service";
import {MealService} from "../services/meal.service";
import {TicketService} from "../services/ticket.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  mealInfo: any = {
    mealId:"",
    description: "",
    price:""
  }
  userTicketNumber!:number;
  signInId!:number;
  mealId=Math.floor(Math.random()*7)+1;
  signeIn: any = {
    userId:'',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed:""
  }
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private notif: MatSnackBar,
              private signupService:SignupService,
              private mealService:MealService,
              private ticketService:TicketService
  ) {
  }

  ngOnInit() {
    // Create the form using FormBuilder
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
      this.signInId = +params['signInId'];
      console.log('Extracted userId:', this.signInId);
      this.getUserDetails();
      this.getMealById();
      this.userTicketNumber=this.getNumberofTickets();
    });

  }
  getNumberofTickets():number{
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return 0;
    }
    // Fetch user tickets using the service
    this.ticketService.getAllTicketsOfUser(this.signInId).subscribe(
      (res: any) => {
        console.log('Fetched user tickets:', res);
        this.userTicketNumber=res.length;
      },
      (error: any) => {
        console.error("Error fetching user tickets:", error);

      }
    );
    return this.userTicketNumber;
  }

  getMealById(): void {
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return;
    }
    // Fetch meal details using the service

    this.mealService.getMealById(this.mealId).subscribe(
      (res: any) => {
        console.log('Fetched meal details:', res);
        this.mealInfo= res;
      },
      (error: any) => {
        console.error("Error fetching meal by ID:", error);

      }
    );
  }
  getUserDetails() {
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return;
    }
    // Fetch user details using the service
    this.signupService.getById(this.signInId).subscribe(
      (res: any) => {
        console.log('Fetched user details:', res);
        this.signeIn = res;
      },
      (error: any) => {
        console.error("Error fetching user by ID:", error);

      }
    );
  }
}
