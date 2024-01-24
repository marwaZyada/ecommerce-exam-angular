import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../services/product.service';
import { CutPipe } from '../pipes/cut.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CarouselModule,CommonModule,CutPipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
products:any[]=[]

constructor(private _productservice:ProductService,private _cart:CartService){}

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['prev', 'next'],
      responsive: {
      
        400: {
          items: 1
        },
        600: {
          items: 3
        },
        1100: {
          items: 5
        }
      },
      nav: true
    }

    ngOnInit(): void {
     this._productservice.getallproduct().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.products=res.data
      }
     }) 
    }

    addelementtocart(id:string){
this._cart.addproducttocart(id).subscribe({
  next:(res)=>{
    console.log(res)
    console.log(res.numOfCartItems)
 
    this._cart.cartitemnum.next(res.numOfCartItems)
    this._cart.totalprice.next(res.data.totalCartPrice)
    alert(res.message)
  }
})
    }
}
