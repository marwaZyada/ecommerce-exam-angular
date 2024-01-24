import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [SidebarComponent,BannerComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
