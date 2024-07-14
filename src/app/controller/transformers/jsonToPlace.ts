import { Place } from '../../domain/place';

export const jsonToPlace = (json_data: object): Place => {
  let place: Place = { name: '' }; // Name is compulsory
  try {
    place.name = json_data['Name' as keyof object];
    if (json_data['City' as keyof object] !== '') {
      place.city = json_data['City' as keyof object];
    }
    if (json_data['Location' as keyof object] !== '') {
      place.area = json_data['Location' as keyof object];
    }
    if (json_data['Map' as keyof object] !== '') {
      place.map = json_data['Map' as keyof object];
    }
    if (json_data['Cuisine' as keyof object] !== '') {
      place.cuisine = json_data['Cuisine' as keyof object];
    }
    if (json_data['Website' as keyof object] !== '') {
      place.website = json_data['Website' as keyof object];
    }
    if ((json_data['Halal' as keyof object] as string).toLowerCase() === 'y') {
      place.halal = true;
    } else {
      place.halal = false;
    }
    if (
      (json_data['Vegetarian' as keyof object] as string).toLowerCase() === 'y'
    ) {
      place.vegetarian = true;
    } else {
      place.vegetarian = false;
    }
    if ((json_data['Vegan' as keyof object] as string).toLowerCase() === 'y') {
      place.vegan = true;
      place.vegetarian = true;
    } else {
      place.vegan = false;
    }
  } catch (e: unknown) {
    console.log(e);
  }
  return place;
};
