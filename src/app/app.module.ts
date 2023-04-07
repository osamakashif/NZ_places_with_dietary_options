import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaceComponent } from './components/place/place.component';
import { PlacesListComponent } from './components/places-list/places-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceComponent,
    PlacesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
