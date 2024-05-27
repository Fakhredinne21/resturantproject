import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SignupService} from "../../services/signup.service";
import { AdminIdetifierService } from '../../services/admin-idetifier.service';

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  adminId!: any;
  adminInfo: any = {
    id: '',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed: ""
  }
  getUserDetails(): void {
    if(!this.adminId) {
      console.log('Invalid userId:', this.adminId);
      return;
    }
    // Fetch user details using the service
    this.signupService.getById(this.adminId).subscribe(
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
  ) {}

  ngOnInit() {
    this._document.body.classList.add('main-body');
    // Create the form using FormBuilder
    this.adminId=this.adminService.getadminId();
    this.getUserDetails()
  }

  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('main-body');
  }
}
