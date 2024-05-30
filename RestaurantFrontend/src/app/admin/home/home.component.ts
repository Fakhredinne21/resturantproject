import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SignupService} from "../../services/signup.service";
import {TicketControllerService} from "../../servs/services/ticket-controller.service";
import {TokenService} from "../../servs/token/token.service";
import {AdminIdentifierService} from "../../services/adminIdentifier.service";

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  userId!: number;
  adminInfo: any = {
    userId: '',
    firstName: "Ahmed",
    lastName: "ali",
    email: "alithelast@example.com",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed: ""
  }

  ticketCount: number = 0;
  price: number = 200;

  getUserDetails(): void {
    if (!this.userId) {
      console.log('Invalid userId:', this.userId);
      return;
    }

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
  constructor(
    private route: ActivatedRoute,
    private signupService: SignupService,
    private adminService: AdminIdentifierService,
    private ticketService: TicketControllerService,
    private tokenService: TokenService
  ) {
  }

  ngOnInit() {
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = parseInt(userIdStr, 10);
      console.log('Extracted userId:', this.userId);
    }
    this.getUserDetails();
    this.sumoftickts();
  }

  sumoftickts() {
    this.ticketService.getAllTickets().subscribe(
      (res: any) => {
        this.ticketCount = res.length;
      }
    )
  }

  protected readonly print = print;
}
