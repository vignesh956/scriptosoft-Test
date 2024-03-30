import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductFullViewComponent } from './product-full-view/product-full-view.component';

const routes: Routes = [
  {
    path:'' , redirectTo : 'profile' , pathMatch:'full'
  },
  {
    path:'profile' , component:ProfileComponent
  },
  {
    path:'list' , component:ProductlistComponent
  },
  {
    path:'list/:id' , component:ProductFullViewComponent
  },
  {
    path:'**' , redirectTo : '/404'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
