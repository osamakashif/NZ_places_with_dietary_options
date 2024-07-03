import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent {
  currentOption: string = '';

  constructor(private router: Router) {
    this.currentOption = this.router.url.split('/')[1];
  }
}
