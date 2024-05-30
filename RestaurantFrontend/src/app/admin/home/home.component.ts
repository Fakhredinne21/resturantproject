import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SignupService} from "../../services/signup.service";
import { AdminIdetifierService } from '../../services/admin-idetifier.service';
import {TicketControllerService} from "../../servs/services/ticket-controller.service";
import {TokenService} from "../../servs/token/token.service";

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{

  userId!: number ;
  adminInfo: any = {
    userId: '',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed: ""
  }
  sumofticets:number=0;
  price:number=200;
  getUserDetails(): void {
    if(!this.userId) {
      console.log('Invalid userId:', this.userId);
      return;
    }
    // Fetch user details using the service
    this.signupService.getById(this.userId).subscribe(
      (res: any) => {
        console.log('Fetched user details:', res);
        this.adminInfo = res;
      },
      (error: any) => {
        console.error("Error fetching user by ID:", error);
      }
    );
  }

  // @ts-ignore
  constructor( @Inject(DOCUMENT) private _document,
               private route: ActivatedRoute,
               private signupService: SignupService,
               private adminService:AdminIdetifierService,
               private ticketService :TicketControllerService,
               private tokenService: TokenService,
  ) {}

  ngOnInit() {
    this._document.body.classList.add('main-body');
    // Create the form using FormBuilder
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = parseInt(userIdStr, 10);
      console.log('Extracted userId:', this.userId);
    }
    this.getUserDetails();
    this.sumoftickts();
  }
  sumoftickts(){
    this.ticketService.getAllTickets().subscribe(
      (res:any)=>{
        this.sumofticets=res.length;
      }
    )
  }
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('main-body');
  }

  protected readonly print = print;
}
