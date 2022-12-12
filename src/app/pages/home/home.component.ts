import { Component, OnInit } from '@angular/core';
import { OrderDerailsService } from 'src/app/service/order-derails.service';
OrderDerailsService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: OrderDerailsService) {}

  footData: any;
  ngOnInit(): void {
   this.footData=this.service.foodDetails   
  }
}
