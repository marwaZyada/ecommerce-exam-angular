import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string="https://ecommerce.routemisr.com"

  constructor(private _http:HttpClient) {

   }

   getallproduct(pageno:number=1):Observable<any>{
    return this._http.get(`${this.url}/api/v1/products?page=${pageno}`)
   }
   getspecificproduct(id:string):Observable<any>{
    return this._http.get(`${this.url}/api/v1/products/${id}`)
   }

   getallbrand():Observable<any>{
    return this._http.get(`${this.url}/api/v1/brands`)
   }
}
