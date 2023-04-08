import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/interfaces/Place';
import { JsonConvertorsService } from 'src/app/json-convertors.service';
// import { csvToJSON } from 'src/helpers/json_convertors';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: Place[] = []

  ngOnInit(): void {
    console.log(JsonConvertorsService.csvToJSON('https://docs.google.com/spreadsheets/d/e/2PACX-1vRWVDocfAcQUT6JpCY8kcRkP1kT93JHBTRmmnDa6KyG4TmOq7gfb8FkjXpRnyrOcCthIfBF0I6WULUl/pub?gid=0&single=true&output=csv'));
  }

  // csvToJSON(`https://docs.google.com/spreadsheets/d/e/2PACX-1vRWVDocfAcQUT6JpCY8kcRkP1kT93JHBTRmmnDa6KyG4TmOq7gfb8FkjXpRnyrOcCthIfBF0I6WULUl/pub?gid=0&single=true&output=csv`)
}
