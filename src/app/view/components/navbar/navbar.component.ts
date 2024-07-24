import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location, NgFor, NgIf } from '@angular/common';
import { NavLink } from '../../../domain/nav-link';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentRoute: string = '';
  navLinks: NavLink[] = [
    new NavLink('All', '/'),
    new NavLink('Halal', '/halal', 'حلال'),
    new NavLink('Vegetarian', '/vegetarian', 'V'),
    new NavLink('Vegan', '/vegan', 'VE'),
    new NavLink('Gluten Free', '/gluten-free', 'GF'),
  ];

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

  activeRouteClass(routeInput: string): string {
    const route: string = routeInput.split('/')[1];
    return this.currentRoute === route ? 'active-link' : '';
  }

  widthLimitTextClass(navLink: NavLink): string {
    return navLink.icon ? 'icon-only' : '';
  }
}
