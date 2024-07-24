export class NavLink {
  name: string;
  path: string;
  icon?: string;

  constructor(name: string, path: string, icon?: string) {
    this.name = name;
    this.path = path;
    if (icon) {
      this.icon = icon;
    }
  }
}
