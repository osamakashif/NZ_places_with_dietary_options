import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.scss',
})
export class PlaceCardComponent {
  @Input() title: string = 'Title';
}
