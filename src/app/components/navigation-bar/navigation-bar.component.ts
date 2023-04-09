import { Component } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  links: Link[] = [{ name: "All locations", path: "" }, { name: "Halal", path: "Halal", icon: "verified" }, { name: "Vegetarian", path: "Vegetarian", icon: "spa" }, { name: "Vegan", path: "Vegan", icon: "forest" }];

}
