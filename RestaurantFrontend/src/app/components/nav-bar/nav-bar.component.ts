import {Component, Input} from '@angular/core';
import {AdminIdetifierService} from "../../services/admin-idetifier.service";
import {TokenService} from "../../servs/token/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() userId!: number;
  constructor(private adminService: AdminIdetifierService,
  private router: Router,
  private tokenService: TokenService){
  }
  ngOnInit() {
    this.adminService.setadminId(this.userId);
  }
  logout(){
    localStorage.removeItem('userId');
    this.tokenService.token == null ;
    this.router.navigate(['login']);
  }
}
