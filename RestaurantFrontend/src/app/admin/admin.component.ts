import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router,RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../services/signup.service";
import {DOCUMENT} from "@angular/common";
import {AdminIdetifierService} from "../services/admin-idetifier.service";
import {TicketControllerService} from "../servs/services/ticket-controller.service";
import {TokenService} from "../servs/token/token.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit, OnDestroy {

  adminId!: number;
  price:number=200;
  admininfo:any={
    userId:'',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed:""
  }
  sumofticets:number=0;
  userId!:number;


  constructor(
               private route: ActivatedRoute,
               private signupService: SignupService,
               private router: Router,
               private adminService:AdminIdetifierService,
               private ticketService :TicketControllerService,
               private tokenService: TokenService
  ) {}

  ngOnInit() {
    /*@Inject(DOCUMENT) private _document,*/
    //this._document.body.classList.add('main-body');
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = parseInt(userIdStr, 10);
      console.log('Extracted userId:', this.userId);
    }
    this.router.navigate(['/admin/home']);
    this.sumoftickts();
    this.getuserdetails();
  }
  getuserdetails(){
    if(!this.userId){
      this.router.navigate(['login']);
    }
    else{
      this.signupService.getById(this.userId).subscribe(
        (res:any)=>{
          this.admininfo=res;
        }
      );
  }
  }
  sumoftickts(){
    this.ticketService.getAllTickets().subscribe(
      (res:any)=>{
        this.sumofticets=this.sumofticets*res.length;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  ngOnDestroy() {
    // remove the class form body tag
    //this._document.body.classList.remove('main-body');
  }

}
