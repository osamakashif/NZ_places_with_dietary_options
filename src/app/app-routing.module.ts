import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { HalalListComponent } from './components/halal-list/halal-list.component';
import { VegetarianListComponent } from './components/vegetarian-list/vegetarian-list.component';
import { VeganListComponent } from './components/vegan-list/vegan-list.component';

const routes: Routes = [
  { path: '', component: PlacesListComponent },
  { path: 'Halal', component: HalalListComponent },
  { path: 'Vegetarian', component: VegetarianListComponent },
  { path: 'Vegan', component: VeganListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
