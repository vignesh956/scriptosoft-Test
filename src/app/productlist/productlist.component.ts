import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent  implements OnInit {
productInfo :any = [];
  constructor(public ps : ProductsService , public routes : Router) { 
  }

  ngOnInit() {
    this.productInfo = this.ps.getProductList();
  }
  fullView(data:any){
    this.routes.navigate(['list/'  + data.id])
  }
}
