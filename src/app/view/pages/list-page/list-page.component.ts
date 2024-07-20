import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceCardComponent } from '../../components/place-card/place-card.component';
import { Place } from '../../../domain/place';
import { jsonToPlace } from '../../../controller/transformers/jsonToPlace';
import { tsvToJSON } from '../../../controller/transformers/tsvToJson';
import { readTsv } from '../../../controller/helpers/read-file';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [PlaceCardComponent, NgFor, NgIf],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent {
  currentOption: string = '';
  places: Place[] = [];
  certifiedOnly: boolean = false;

  constructor(private router: Router) {
    this.currentOption = this.router.url.split('/')[1];
    this.loadPlaces();
  }

  private loadPlaces() {
    readTsv(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWVDocfAcQUT6JpCY8kcRkP1kT93JHBTRmmnDa6KyG4TmOq7gfb8FkjXpRnyrOcCthIfBF0I6WULUl/pub?gid=0&single=true&output=tsv'
    ).then((res) => {
      let jsonDataArray = tsvToJSON(res);
      for (let jsonData of jsonDataArray) {
        let placeToAdd: Place = jsonToPlace(jsonData);
        this.places.push(placeToAdd);
      }
    });
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

  private sortPlacesByName(placeA: Place, placeB: Place): number {
    return placeA.name > placeB.name ? 1 : -1;
  }

  getSortedFilteredPlaces(): Place[] {
    const sortedPlaces = this.getSortedPlaces();
    return this.certifiedOnly
      ? sortedPlaces.filter((place: Place) => {
          return (
            place.halalCertified ||
            place.vegetarianCertified ||
            place.veganCertified
          );
        })
      : sortedPlaces;
  }

  getSortedPlaces(): Place[] {
    return this.getPlaces().sort(this.sortPlacesByName);
  }

  private getPlaces(): Place[] {
    switch (this.currentOption) {
      case '':
        return this.places;
      case 'halal':
        return this.places.filter((place) => {
          return place.halal;
        });
      case 'vegetarian':
        return this.places.filter((place) => {
          return place.vegetarian;
        });
      case 'vegan':
        return this.places.filter((place) => {
          return place.vegan;
        });
      default:
        return this.places;
    }
  }
}
