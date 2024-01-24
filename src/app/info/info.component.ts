import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterLink,MatTabsModule,CommonModule,MatDividerModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
@Input() description!:string
}
