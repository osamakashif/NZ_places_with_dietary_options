import { Component, Input } from '@angular/core';
import { Place } from 'src/app/interfaces/Place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {

  @Input() place!: Place; // ! added as otherwise explicit constuction needed
  
}
