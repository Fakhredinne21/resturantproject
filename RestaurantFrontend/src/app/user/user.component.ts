import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../services/signup.service";
import {MealService} from "../services/meal.service";
import {TicketService} from "../services/ticket.service";
import {TokenService} from "../servs/token/token.service";
import {RegistrationRequest} from "../servs/models/registration-request";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  registerRequest:RegistrationRequest={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    role:""
  }
  private signInId!:number ;

  mealInfo: any = {
    mealId:"",
    description: "",
    created_date: "",
    price:""
  }

  price:number=200;

  userTicketNumber!:number;
  mealId=1;

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
              private signupService:SignupService,
              private mealService:MealService,
              private ticketService:TicketService,
              private tokenService:TokenService
  ) {
  }
  userId!:number;
  logout(){
    localStorage.removeItem('userId');
    this.tokenService.token == null ;
    this.router.navigate(['login']);
  }
  ngOnInit() {
    // Create the form using FormBuilder
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = parseInt(userIdStr, 10);
      console.log('Extracted userId:', this.userId);
    }
      this.getUserDetails();
      this.getMealById();
      this.userTicketNumber=this.getNumberofTickets();
    }
  getNumberofTickets():number{
    if (!this.userId) {
      this.router.navigate(['login']);
    }
    // Fetch user tickets using the service
    this.ticketService.getAllTicketsOfUser(this.userId).subscribe(
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
    if (!this.userId) {
      this.router.navigate(['login']);
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
    if (!this.userId) {
      this.router.navigate(['login']);
    }
    // Fetch user details using the service
    this.signupService.getById(this.userId).subscribe(
      (res: any) => {
        console.log('Fetched user details:', res);
        this.signeIn = res;  // Store the fetched user details
      },
      (error: any) => {
        console.error("Error fetching user by ID:", error);

      }
    );
  }
}
