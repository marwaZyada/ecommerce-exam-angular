import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { PromoComponent } from '../promo/promo.component';
import { ProductComponent } from '../product/product.component';
import { BrandComponent } from '../brand/brand.component';
import { SellerComponent } from '../seller/seller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,PromoComponent,ProductComponent,BrandComponent,SellerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
