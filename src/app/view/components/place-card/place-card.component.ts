import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.scss',
})
export class PlaceCardComponent {
  @Input() title: string = 'Title';
  @Input() halal: boolean = false;
  @Input() halalCertified: boolean = false;
  @Input() vegetarian: boolean = false;
  @Input() vegetarianCertified: boolean = false;
  @Input() vegan: boolean = false;
  @Input() veganCertified: boolean = false;
  @Input() location: string = '';
  @Input() city: string = '';
}
