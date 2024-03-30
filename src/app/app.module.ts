import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';
import { ProductFullViewComponent } from './product-full-view/product-full-view.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProductFullViewComponent,
    ProductlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    IonicModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
