import { Place } from '../../domain/place';

export const jsonToPlace = (json_data: object): Place => {
  let name: string = '';
  let halal: boolean = false;
  let halalCertified: boolean = false;
  let vegetarian: boolean = false;
  let vegetarianCertified: boolean = false;
  let vegan: boolean = false;
  let veganCertified: boolean = false;
  let websiteLink: string | undefined = undefined;
  let postLink: string | undefined = undefined;
  let youtubeLink: string | undefined = undefined;
  let instagramLink: string | undefined = undefined;
  let picukiLink: string | undefined = undefined;
  let facebookLink: string | undefined = undefined;
  let xOrTwitterLink: string | undefined = undefined;
  let tiktokLink: string | undefined = undefined;
  let mapLink: string | undefined = undefined;
  let area: string | undefined = undefined;
  let city: string | undefined = undefined;
  let cuisine: string | undefined = undefined;
  try {
    name = json_data['Name' as keyof object];
    if ((json_data['Halal' as keyof object] as string)?.toLowerCase() === 'y') {
      halal = true;
    }
    if (
      (
        json_data['Halal_Certified' as keyof object] as string
      )?.toLowerCase() === 'y'
    ) {
      halalCertified = true;
    }
    if (
      (json_data['Vegetarian' as keyof object] as string)?.toLowerCase() === 'y'
    ) {
      vegetarian = true;
    }
    if (
      (
        json_data['Vegetarian_Certified' as keyof object] as string
      )?.toLowerCase() === 'y'
    ) {
      vegetarianCertified = true;
    }
    if ((json_data['Vegan' as keyof object] as string)?.toLowerCase() === 'y') {
      vegan = true;
      vegetarian = true;
    }
    if (
      (
        json_data['Vegan_Certified' as keyof object] as string
      )?.toLowerCase() === 'y'
    ) {
      veganCertified = true;
    }
    if (json_data['Website' as keyof object] !== '') {
      websiteLink = json_data['Website' as keyof object];
    }
    if (json_data['Post' as keyof object] !== '') {
      postLink = json_data['Post' as keyof object];
    }
    if (json_data['YouTube' as keyof object] !== '') {
      youtubeLink = json_data['YouTube' as keyof object];
    }
    if (json_data['Instagram' as keyof object] !== '') {
      instagramLink = json_data['Instagram' as keyof object];
    }
    if (json_data['Picuki' as keyof object] !== '') {
      picukiLink = json_data['Picuki' as keyof object];
    }
    if (json_data['Facebook' as keyof object] !== '') {
      facebookLink = json_data['Facebook' as keyof object];
    }
    if (json_data['Twitter' as keyof object] !== '') {
      xOrTwitterLink = json_data['Twitter' as keyof object];
    }
    if (json_data['TikTok' as keyof object] !== '') {
      tiktokLink = json_data['TikTok' as keyof object];
    }
    if (json_data['Map' as keyof object] !== '') {
      mapLink = json_data['Map' as keyof object];
    }
    if (json_data['Location' as keyof object] !== '') {
      area = json_data['Location' as keyof object];
    }
    if (json_data['City' as keyof object] !== '') {
      city = json_data['City' as keyof object];
    }
    if (json_data['Cuisine' as keyof object] !== '') {
      cuisine = json_data['Cuisine' as keyof object];
    }
  } catch (e: unknown) {
    console.log(e);
  }
  return new Place(
    name,
    halal,
    halalCertified,
    vegetarian,
    vegetarianCertified,
    vegan,
    veganCertified,
    websiteLink,
    postLink,
    youtubeLink,
    instagramLink,
    picukiLink,
    facebookLink,
    xOrTwitterLink,
    tiktokLink,
    mapLink,
    area,
    city,
    cuisine
  );
};
