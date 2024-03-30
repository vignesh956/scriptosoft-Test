import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-full-view',
  templateUrl: './product-full-view.component.html',
  styleUrls: ['./product-full-view.component.scss'],
})
export class ProductFullViewComponent  implements OnInit {

  productinfo :any;
  ProductId:any;
  constructor(public ps : ProductsService , public Ac : ActivatedRoute) { 
    this.ProductId = this.Ac.snapshot.paramMap.get('id');
    console.log(this.ProductId , 'ProductId');
    
  }

  ngOnInit() {
  const productList = this.ps.getProductList();
  console.log(productList);
  this.productinfo = productList.find(ele => ele.id == this.ProductId)
  console.log(this.productinfo , 'productinfo');
  }

}
