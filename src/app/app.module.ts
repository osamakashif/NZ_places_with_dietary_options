import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaceComponent } from './components/place/place.component';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { HalalListComponent } from './components/halal-list/halal-list.component';
import { VegetarianListComponent } from './components/vegetarian-list/vegetarian-list.component';
import { VeganListComponent } from './components/vegan-list/vegan-list.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceComponent,
    PlacesListComponent,
    HalalListComponent,
    VegetarianListComponent,
    VeganListComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
