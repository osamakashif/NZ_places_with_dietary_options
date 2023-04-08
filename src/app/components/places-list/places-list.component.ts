import { Component } from '@angular/core';
import { Place } from 'src/app/interfaces/Place';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent {

  places: Place[] = []
}
