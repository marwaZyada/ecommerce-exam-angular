import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BannerComponent } from '../banner/banner.component';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CutPipe } from '../pipes/cut.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SidebarComponent,BannerComponent,CommonModule,CutPipe,FormsModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  totalprice!:number
  products:any[]=[]
  @ViewChild('ref')inputcount!:ElementRef<HTMLInputElement>
constructor(private _cart:CartService){
  this.getcartelement()
  _cart.totalprice.subscribe({
    next:()=>{
      this.totalprice=_cart.totalprice.getValue()
    }
  })

}

getcartelement(){
  this._cart.getcart().subscribe({
    next:(res)=>{
      console.log(res.data)
      console.log(res.data.products.length)
      this.products=res.data.products
      console.log(this.products)
      this._cart.cartitemnum.next(res.data.products.length)
      this._cart.totalprice.next(res.data.totalCartPrice)
    }
  })
}

getquantity(e:any):number{
  console.log(e.target.value)
return parseInt(e.target.value)
}


removecart(id:string){
this._cart.removecart(id).subscribe({
  next:(res)=>{
    console.log(res)
    if(res.status=="success"){
      this.products=res.data.products;
      this._cart.totalprice.next(res.data.totalCartPrice)
      this._cart.cartitemnum.next(res.numOfCartItems)

    }
  }
})
}


plus(count:string,id:string){
let x=(parseInt(count)+1)

console.log(x)
console.log(this.inputcount.nativeElement)
this.inputcount.nativeElement.value=x.toString()
this._cart.updatecartcount(id,x.toString()).subscribe({
  next:(res)=>{
    console.log(res)
    this.products=res.data.products;
    this._cart.totalprice.next(res.data.totalCartPrice)
  }
})
}


minus(count:string,id:string){
let x=(parseInt(count)-1)
if(x==0){
  this.removecart(id)
}
else{
console.log(x)
console.log(this.inputcount.nativeElement)
this.inputcount.nativeElement.value=x.toString()
this._cart.updatecartcount(id,x.toString()).subscribe({
  next:(res)=>{
    console.log(res)
    this.products=res.data.products;
    this._cart.totalprice.next(res.data.totalCartPrice)
  }
})
}
}

clearcart(){
  this._cart.clearcart().subscribe({
    next:(res)=>{
      if(res.message=="success"){
        this.products=[];
        this._cart.totalprice.next(0)
      this._cart.cartitemnum.next(0)
      }
    }
  })
}
}
