import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() role!: string;
}
