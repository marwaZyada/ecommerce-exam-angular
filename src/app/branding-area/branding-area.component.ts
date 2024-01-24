import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-branding-area',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './branding-area.component.html',
  styleUrl: './branding-area.component.css'
})
export class BrandingAreaComponent {
cartno!:number
totalprice!:number
constructor(private _cart:CartService){
_cart.cartitemnum.subscribe({
  next:()=>{
    this.cartno=_cart.cartitemnum.getValue()
    console.log(this.cartno)
  }
})
_cart.totalprice.subscribe({
  next:()=>{
    this.totalprice=_cart.totalprice.getValue()
    console.log(this.totalprice)
  }
})

}
}
