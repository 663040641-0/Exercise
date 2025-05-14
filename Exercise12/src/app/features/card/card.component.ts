import { Component } from '@angular/core';
import {provideRouter, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './card.component.html',
  standalone: true,
  styleUrl: './card.component.css'
})
export class CardComponent {

}
