export class Place {
  name: string;
  halal: boolean;
  halalCertified: boolean;
  vegetarian: boolean;
  vegetarianCertified: boolean;
  vegan: boolean;
  veganCertified: boolean;
  websiteLink?: string;
  postLink?: string;
  youtubeLink?: string;
  instagramLink?: string;
  picukiLink?: string;
  facebookLink?: string;
  xOrTwitterLink?: string;
  tiktokLink?: string;
  mapLink?: string;
  area?: string;
  city?: string;
  cuisine?: string;

  constructor(
    name: string,
    halal: boolean,
    halalCertified: boolean,
    vegetarian: boolean,
    vegetarianCertified: boolean,
    vegan: boolean,
    veganCertified: boolean,
    websiteLink?: string,
    postLink?: string,
    youtubeLink?: string,
    instagramLink?: string,
    picukiLink?: string,
    facebookLink?: string,
    xOrTwitterLink?: string,
    tiktokLink?: string,
    mapLink?: string,
    area?: string,
    city?: string,
    cuisine?: string
  ) {
    this.name = name;
    this.halalCertified = halalCertified;
    this.vegetarianCertified = vegetarianCertified;
    this.veganCertified = veganCertified;
    halalCertified ? (this.halal = halalCertified) : (this.halal = halal);
    vegetarianCertified
      ? (this.vegetarian = vegetarianCertified)
      : (this.vegetarian = vegetarian);
    veganCertified ? (this.vegan = veganCertified) : (this.vegan = vegan);
    if (websiteLink) {
      this.websiteLink = websiteLink;
    }
    if (postLink) {
      this.postLink = postLink;
    }
    if (youtubeLink) {
      this.youtubeLink = youtubeLink;
    }
    if (instagramLink) {
      this.instagramLink = instagramLink;
    }
    if (picukiLink) {
      this.picukiLink = picukiLink;
    }
    if (facebookLink) {
      this.facebookLink = facebookLink;
    }
    if (xOrTwitterLink) {
      this.xOrTwitterLink = xOrTwitterLink;
    }
    if (tiktokLink) {
      this.tiktokLink = tiktokLink;
    }
    if (mapLink) {
      this.mapLink = mapLink;
    }
    if (area) {
      this.area = area;
    }
    if (city) {
      this.city = city;
    }
    if (cuisine) {
      this.cuisine = cuisine;
    }
  }
}
