import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDerailsService } from 'src/app/service/order-derails.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit{

  constructor(private param: ActivatedRoute,private service: OrderDerailsService) { }
  
  getMenuid: any;
  menuData: any;
  ngOnInit() {
    this.getMenuid = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuid, 'getmenu');
    if (this.getMenuid)
    {
     this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuid;
      })
    }
  }
}
