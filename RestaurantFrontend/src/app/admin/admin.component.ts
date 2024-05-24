import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router,RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../services/signup.service";
import {DOCUMENT} from "@angular/common";
import {AdminIdetifierService} from "../services/admin-idetifier.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit, OnDestroy {

  adminId!: string;

  // @ts-ignore
  constructor(
               private route: ActivatedRoute,
               private signupService: SignupService,
               private router: Router,
               private adminService:AdminIdetifierService,
  ) {}

  ngOnInit() {
    /*@Inject(DOCUMENT) private _document,*/
    //this._document.body.classList.add('main-body');
    this.adminId= this.adminService.getadminId();
    this.router.navigate(['/admin/home']);
  }

  ngOnDestroy() {
    // remove the class form body tag
    //this._document.body.classList.remove('main-body');
  }

}
