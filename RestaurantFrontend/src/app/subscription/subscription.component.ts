import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SubscriptionserviceService} from "../services/subscriptionservice.service";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {



  subsForm!: FormGroup;
  subscription={
    cardId:'',
    priceTicket:'',
    subscriptionDate:'',
    endSubscriptionDate:'',
  };


  data:any[]=[];
  constructor(private subscriptionservics: SubscriptionserviceService) {}

  getAllSubscriptions() {
    this.subscriptionservics.getAllSubscritpion().subscribe((res:any[])=>{
      this.data=res;
    });
  }
  ngOnInit(): void {
    this.getAllSubscriptions();
  }
}
