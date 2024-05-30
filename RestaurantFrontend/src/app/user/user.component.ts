import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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
  styleUrl: './user.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent {

}
