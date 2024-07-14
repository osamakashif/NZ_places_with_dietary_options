import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceCardComponent } from '../../components/place-card/place-card.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [PlaceCardComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent {
  currentOption: string = '';

  constructor(private router: Router) {
    this.currentOption = this.router.url.split('/')[1];
  }

  getTitle(): string {
    switch (this.currentOption) {
      case '':
        return 'All options';
      case 'halal':
        return 'Halal (حلال) options';
      case 'vegetarian':
        return 'Vegetarian options';
      case 'vegan':
        return 'Vegan options';
      default:
        return 'Options';
    }
  }
}
