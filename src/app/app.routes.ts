import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SpecificproductComponent } from './specificproduct/specificproduct.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DescriptionComponent } from './description/description.component';
import { ReviewsComponent } from './reviews/reviews.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'shopepage',component:ShopComponent},
    
   
    // {path:'singleproduct',children:[
    //     {path:'description',component:DescriptionComponent,outlet:'child'},
    //     {path:'reviews',component:ReviewsComponent,outlet:'child'},
    // ]},
    {path:'singleproduct/:id',component:SpecificproductComponent},
   
    {path:'cart',component:CartComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'**',component:NotfoundComponent},
    
];
