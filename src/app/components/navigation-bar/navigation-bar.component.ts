import { Component } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  links: Link[] = [{ name: "All", path: "" }, { name: "Halal", path: "Halal" }, { name: "Vegetarian", path: "Vegetarian" }, { name: "Vegan", path: "Vegan" }];
  
}
