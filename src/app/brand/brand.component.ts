import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit{
  brands:any[]=[]
  constructor(private _productservice:ProductService){}
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
      500: {
        items: 3
      },
      1100: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this._productservice.getallbrand().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.brands=res.data
      }
    })
  }
}
