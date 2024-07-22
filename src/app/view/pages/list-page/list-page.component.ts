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
  loading: boolean = true;
  private readonly localStoragePlacesKey: string =
    'nz-places-with-dietary-options-places';
  private readonly localStorageCertifiedSettingsKey: string =
    'nz-places-with-dietary-options-certified-settings';
  private readonly tsvLink: string =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWVDocfAcQUT6JpCY8kcRkP1kT93JHBTRmmnDa6KyG4TmOq7gfb8FkjXpRnyrOcCthIfBF0I6WULUl/pub?gid=0&single=true&output=tsv';

  constructor(private router: Router) {
    this.currentOption = this.router.url.split('/')[1];
    this.loadPlaces();
    const certifiedSettings: string | null = localStorage.getItem(
      this.localStorageCertifiedSettingsKey
    );
    if (certifiedSettings) {
      this.certifiedOnly = true;
    }
  }

  private loadPlaces() {
    const placesInStorage: string | null = localStorage.getItem(
      this.localStoragePlacesKey
    );
    if (placesInStorage) {
      this.places = JSON.parse(placesInStorage);
      this.loading = false;
    }
    readTsv(this.tsvLink).then((res) => {
      let jsonDataArray = tsvToJSON(res);
      let newPlaces: Place[] = [];
      for (let jsonData of jsonDataArray) {
        let placeToAdd: Place = jsonToPlace(jsonData);
        newPlaces.push(placeToAdd);
      }
      this.places = newPlaces.sort(this.sortPlacesByName);
      localStorage.setItem(
        this.localStoragePlacesKey,
        JSON.stringify(this.places)
      );
      this.loading = false;
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
      case 'gluten-free':
        return 'Gluten free options';
      default:
        return 'Options';
    }
  }

  toggleCertifiedOnly() {
    this.certifiedOnly = !this.certifiedOnly;
    this.certifiedOnly
      ? localStorage.setItem(
          this.localStorageCertifiedSettingsKey,
          'certified-only'
        )
      : localStorage.removeItem(this.localStorageCertifiedSettingsKey);
  }

  private sortPlacesByName(placeA: Place, placeB: Place): number {
    return placeA.name > placeB.name ? 1 : -1;
  }

  getCertificationFilteredPlaces(): Place[] {
    const sortedPlaces = this.getOptionFilteredPlaces();
    return this.certifiedOnly
      ? sortedPlaces.filter((place: Place) => {
          return (
            place.halalCertified ||
            place.vegetarianCertified ||
            place.veganCertified ||
            place.glutenFreeCertified
          );
        })
      : sortedPlaces;
  }

  private getOptionFilteredPlaces(): Place[] {
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
      case 'gluten-free':
        return this.places.filter((place) => {
          return place.glutenFree;
        });
      default:
        return this.places;
    }
  }
}
