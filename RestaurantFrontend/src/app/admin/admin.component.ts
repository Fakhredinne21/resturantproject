import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router,RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../services/signup.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit, OnDestroy {

  adminId!: number;

  // @ts-ignore
  constructor( @Inject(DOCUMENT) private _document,
               private route: ActivatedRoute,
               private signupService: SignupService
  ) {}

  ngOnInit() {
    this._document.body.classList.add('main-body');
  }

  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('main-body');
  }

}
