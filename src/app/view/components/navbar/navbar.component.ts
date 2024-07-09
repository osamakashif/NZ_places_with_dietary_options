import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentRoute: string = '';

  constructor(private location: Location) {
    this.refreshRoute();
  }

  private refreshRoute() {
    const route: string | undefined = this.location.path().split('/')[1];
    this.currentRoute = route ? route : '';
  }

  updateRoute() {
    setTimeout(() => {
      this.refreshRoute();
    }, 0);
  }

  activeRouteClass(route: string): string {
    return this.currentRoute === route ? 'active-link' : '';
  }
}
