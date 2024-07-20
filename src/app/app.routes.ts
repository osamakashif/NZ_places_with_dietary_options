import { Routes } from '@angular/router';
import { ListPageComponent } from './view/pages/list-page/list-page.component';

export const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'halal', component: ListPageComponent },
  { path: 'vegetarian', component: ListPageComponent },
  { path: 'vegan', component: ListPageComponent },
  { path: 'gluten-free', component: ListPageComponent },
  { path: 'Halal', redirectTo: 'halal', pathMatch: 'full' },
  { path: 'Vegetarian', redirectTo: 'vegetarian', pathMatch: 'full' },
  { path: 'Vegan', redirectTo: 'vegan', pathMatch: 'full' },
  { path: 'glutenfree', redirectTo: 'gluten-free', pathMatch: 'full' },
  { path: 'glutenFree', redirectTo: 'gluten-free', pathMatch: 'full' },
  { path: 'gluten-Free', redirectTo: 'gluten-free', pathMatch: 'full' },
  { path: 'Gluten-free', redirectTo: 'gluten-free', pathMatch: 'full' },
  { path: 'Gluten-Free', redirectTo: 'gluten-free', pathMatch: 'full' },
  { path: 'GlutenFree', redirectTo: 'gluten-free', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
