import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DescriptionComponent } from '../description/description.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { InfoComponent } from '../info/info.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-specificproduct',
  standalone: true,
  imports: [BannerComponent,SidebarComponent,CarouselModule,RouterOutlet,InfoComponent,CommonModule],
  templateUrl: './specificproduct.component.html',
  styleUrl: './specificproduct.component.css'
})
export class SpecificproductComponent implements OnInit{
id!:string
  product!:any
  constructor(private _productservice:ProductService,private _activated:ActivatedRoute,private _cart:CartService){
    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
     700: {
        items: 3
      },
      
    },
    nav: true
  }

ngOnInit(): void {

  this._activated.paramMap.subscribe({
    next:(res)=>{
      console.log(this.id)
          this.id= res.get("id")||""
        
    }
  })
  this.getproductbyid(this.id)

}

  getproductbyid(id:string){
this._productservice.getspecificproduct(id).subscribe({
  next:(res)=>{
this.product=res.data
console.log(this.product)
  }
})
  }

  addelementtocart(id:string){
    console.log(id)
    this._cart.addproducttocart(id).subscribe({
      next:(res)=>{
        console.log(res.message)
        console.log(res.numOfCartItems)
     
        this._cart.cartitemnum.next(res.numOfCartItems)
        this._cart.totalprice.next(res.data.totalCartPrice)
        alert(res.message)
      }
    })
        }
}
