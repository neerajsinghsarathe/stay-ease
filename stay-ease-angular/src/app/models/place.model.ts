export interface Place {
  _id: number;
  owner: string;
  title: string;
  address: string;
  perks: string[];
  extraInfo: string;
  checkIn?: number | string | null;
  checkOut?: number | string | null;
  maxGuests: number;
  price: number;
  description: string;
  photos: string[];
  __v?: number;
}

export interface PlaceAPIModel {
  hotelId: number;
  name: string
  description: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
  amenities: string;
  price: number;
  rating: string;
  ownerId: string;
  isActive: string;
  images: string[];
}

export class PlaceModel implements Place {
  _id: number;
  owner: string;
  title: string;
  address: string;
  perks: string[];
  extraInfo: string;
  checkIn?: number | string | null;
  checkOut?: number | string | null;
  maxGuests: number;
  price: number;
  description: string;
  photos: string[];
  __v?: number;

  constructor(place: PlaceAPIModel) {
    this._id = place.hotelId || 0;
    this.owner = place.ownerId || "";
    this.title = place.name || "";
    this.address = `${place.address}, ${place.city}, ${place.state}, ${place.pinCode}, ${place.country}`;
    this.perks = place.amenities.split(',') || [];
    this.extraInfo = place.rating || "";
    this.maxGuests = 0;
    this.price = place.price || 0;
    this.description = place.description || "";
    this.photos = place.images || [];
    this.__v = 0;
  }
}

export class PlaceModelList {
  places: Place[];

  constructor(places: PlaceAPIModel[]) {
    this.places = places.map(place => new PlaceModel(place));
  }
}
