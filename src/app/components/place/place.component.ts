import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/interfaces/Place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place!: Place; // ! added as otherwise explicit constuction needed

  location: string = ""

  ngOnInit(): void {
    if ((this.place.location as string).includes(this.place.city as string)) {
      this.location = this.place.location as string
    } else {
      this.location = this.place.location + ", " + this.place.city
    }
  }

}
