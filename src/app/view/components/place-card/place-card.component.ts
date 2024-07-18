import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Place } from '../../../domain/place';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.scss',
})
export class PlaceCardComponent {
  @Input() place: Place = new Place(
    '',
    false,
    false,
    false,
    false,
    false,
    false
  );

  getLocation(): string {
    let location: string = '';
    if (this.place.area) {
      location = this.place.area;
    }
    if (this.place.city) {
      location === ''
        ? (location = this.place.city)
        : (location += ', ' + this.place.city);
    }
    return location;
  }
}
