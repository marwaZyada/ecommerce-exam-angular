import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  animations: [
    trigger('enterExitLeft', [
      transition(':enter', [
          style({ opacity: 0, transform: 'translateX(0)' }),
          animate(
              '1000ms linear',
              style({ opacity: 1 , transform: 'translateX(-500px)'  })
          ),
    ]),
    transition(':leave', [
          animate(
              '1000ms linear',
              style({ opacity: 0, transform: 'translateX(200px)' })
          ),
    ]),
  ]),
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
