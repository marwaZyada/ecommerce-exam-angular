import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string="https://ecommerce.routemisr.com"
cartitemnum:BehaviorSubject<number>=new BehaviorSubject(0)
totalprice:BehaviorSubject<number>=new BehaviorSubject(0)

  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTAxNTIxNTJlMTVjZjQ2ODYxMmI0ZSIsIm5hbWUiOiJubm4yNCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA1MTc3MjU2LCJleHAiOjE3MTI5NTMyNTZ9.b85Lw2cTTHqaqlRwCHBFjW_vWPlJIsQiFf63XYVlyyw"
  
  constructor(private _http:HttpClient) { 
    this.getcart().subscribe({
      next:(res)=>{
        console.log(res.data)
        console.log(res.data.products.length)
        this.cartitemnum.next(res.data.products.length)
        this.totalprice.next(res.data.totalCartPrice)
      }
    })
  
  }

  addproducttocart(id:string):Observable<any>{
    return this._http.post(`${this.url}/api/v1/cart`,{"productId": id},{headers:{
token:this.token
    }})
  }
  getcart():Observable<any>{
    return this._http.get(`${this.url}/api/v1/cart`,{headers:{
token:this.token
    }})
  }

 removecart(id:string):Observable<any>{
    return this._http.delete(`${this.url}/api/v1/cart/${id}`,{headers:{
token:this.token
    }})
  }

 updatecartcount(id:string,count:string):Observable<any>{
    return this._http.put(`${this.url}/api/v1/cart/${id}`,{"count":count},{headers:{
token:this.token
    }})
  }

  clearcart():Observable<any>{
    return this._http.delete(`${this.url}/api/v1/cart`,{headers:{
token:this.token
    }})
  }
}
