import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SignupService} from "../../services/signup.service";
import {RegistrationRequest} from "../../servs/models/registration-request";
import {FormBuilder} from "@angular/forms";
import {MealService} from "../../services/meal.service";
import {TicketService} from "../../services/ticket.service";
import {TokenService} from "../../servs/token/token.service";
import {UserIdentifierService} from "../../services/userIdentifier.service";

@Component({
  selector: 'user-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class UserHomeComponent implements OnInit{
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
    userId:"1",
    firstName: "Aziz",
    lastName: "Jamazi",
    email: "JamaziKnox@gmail.com",
    password: "",
    profileImage: "",
    role: "Student",
    isSubscribed:""
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private signupService:SignupService,
              private mealService:MealService,
              private ticketService:TicketService,
              private tokenService:TokenService,
              private userService: UserIdentifierService
  ) {}

  userId: number | undefined;

  logout(){
    localStorage.removeItem('userId');
    this.tokenService.token == null ;
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.userId = this.userService.getUserId();
    this.getUserDetails();
    this.getMealById();
    this.userTicketNumber=this.getNumberofTickets();
  }

  getNumberofTickets():number{
    if (!this.userId) {
      console.log('Invalid userId:', this.userId);
      return 0;
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
      console.log('Invalid userId:', this.userId);
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
    if (!this.userId) {
      console.log('Invalid userId:', this.userId);
      return;
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
