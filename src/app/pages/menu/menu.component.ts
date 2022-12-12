import { Component, OnInit } from '@angular/core';
import { OrderDerailsService } from 'src/app/service/order-derails.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private service:OrderDerailsService) { }
 
  footData: any;
  ngOnInit(): void {
   this.footData=this.service.foodDetails   
  }
}
