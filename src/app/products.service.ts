import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 listP = [
  {
    name : "vignesh",
    id : 1,
    village:  "Kp"
  },
  {
    name : "Anish",
    id : 2,
    village:  "HYD"
  },
  {
    name : "Swathi",
    id : 3,
    village:  "BSN"
  },
  {
    name : "Krishna",
    id : 4,
    village:  "KPHB"
  },
  {
    name : "Ramu",
    id : 6,
    village:  "KPHB"
  },
  {
    name : "Bjp",
    id : 7,
    village:  "AAAA"
  }
 ]

  constructor() { }


  getProductList(){
    return this.listP;
  }
}
