import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ProductService } from '../services/product.service';
import { CutPipe } from '../pipes/cut.pipe';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [BannerComponent,CommonModule,CutPipe,RouterLink,RouterLinkActive],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  pagination=[1,2,3,4,5]
  pagenum!:number
  products:any[]=[]
  constructor(private _productservice:ProductService,private _cart:CartService){}
  ngOnInit(): void {
   this.getpageproduct()
   }

   getpageproduct(pageno:number=1){
    this._productservice.getallproduct().subscribe({
      next:(res)=>{
        console.log(res.data)
        if(pageno>5){
         pageno=1;
        
        }
       else if(pageno<1){
         pageno=5}
        
        this.products=res.data.slice(pageno*8-8,pageno*8)
        console.log(this.products)
        this.pagenum=pageno;
       
        console.log(this.pagenum)
       
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
