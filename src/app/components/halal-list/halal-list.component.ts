import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/interfaces/Place';
import { JsonConvertorsService } from 'src/app/services/json-convertors.service';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';
import { CreatePlaceService } from 'src/app/services/create-place.service';

@Component({
  selector: 'app-halal-list',
  templateUrl: './halal-list.component.html',
  styleUrls: ['./halal-list.component.css']
})
export class HalalListComponent implements OnInit {

  places: Place[] = []

  ngOnInit(): void {
    DataFetcherService.readFile('https://docs.google.com/spreadsheets/d/e/2PACX-1vRWVDocfAcQUT6JpCY8kcRkP1kT93JHBTRmmnDa6KyG4TmOq7gfb8FkjXpRnyrOcCthIfBF0I6WULUl/pub?gid=0&single=true&output=tsv').then(res => {
      let jsonDataArray = JsonConvertorsService.tsvToJSON(res);
      for (let jsonData of jsonDataArray) {
        let placeToAdd: Place = CreatePlaceService.placeFromJSON(jsonData)
        if (placeToAdd.halal === true) {
          this.places.push(placeToAdd)          
        }
      }
    })
  }
}
