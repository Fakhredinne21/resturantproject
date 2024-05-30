import {Component, Input} from '@angular/core';
import {AdminIdetifierService} from "../../services/admin-idetifier.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() userId!: number;
  constructor(private adminService: AdminIdetifierService) {
  }
  ngOnInit() {
    this.adminService.setadminId(this.userId);
  }
}
