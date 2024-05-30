import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SignupService} from "../services/signup.service";
import {TicketControllerService} from "../servs/services/ticket-controller.service";
import {TokenService} from "../servs/token/token.service";
import {AdminIdentifierService} from "../services/adminIdentifier.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  admininfo: any = {
    userId: '',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed: ""
  }
  sumofticets: number = 0;
  userId!: number;


  constructor(
    private route: ActivatedRoute,
    private signupService: SignupService,
    private router: Router,
    private adminService: AdminIdentifierService,
    private ticketService: TicketControllerService,
    private tokenService: TokenService
  ) {
  }

  ngOnInit() {
    this.userId = parseInt(this.adminService.getAdminId());
    this.router.navigate(['/admin/home']);
    this.sumoftickts();
    this.getuserdetails();
  }

  getuserdetails() {
    if (!this.userId) {
      this.router.navigate(['login']);
    } else {
      this.signupService.getById(this.userId).subscribe(
        (res: any) => {
          this.admininfo = res;
        }
      );
    }
  }

  sumoftickts() {
    this.ticketService.getAllTickets().subscribe(
      (res: any) => {
        this.sumofticets = this.sumofticets * res.length;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
