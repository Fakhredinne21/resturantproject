import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubscriptionComponent} from "./subscription/subscription.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubscriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularFrontend';
}
