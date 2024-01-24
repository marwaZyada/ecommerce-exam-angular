import { Component } from '@angular/core';
import { MainmenuComponent } from '../mainmenu/mainmenu.component';
import { BrandingAreaComponent } from '../branding-area/branding-area.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainmenuComponent,BrandingAreaComponent,NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
