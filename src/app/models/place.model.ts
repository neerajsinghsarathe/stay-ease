export interface Place {
  _id: number;
  owner: string;
  title: string;
  fullAddress: string;
  address?: string;
  city?: string;
  state?: string;
  pinCode?: string;
  country?: string;
  perks: string[];
  rating: string;
  checkIn?: number | string | null;
  checkOut?: number | string | null;
  maxGuests: number;
  price: number;
  description: string;
  photos: string[];
  rooms: Room[]
  reviews?: Review[];
  isActive?: boolean;
  __v?: number;
}

export interface Room {
  roomId: number;
  roomType: string;
  price: number;
  capacity: number;
  totalAvailableRooms: number;
  roomDescription: string;
  isActive: boolean;
}

export interface Review {
  reviewId: number;
  rating: number;
  comment: string;
  reviewDate: string;
  userName: string;
  email: string;
  phoneNumber: string;
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
  rooms: [],
  reviews: Review[]
}

export class PlaceModel implements Place {
  _id: number;
  owner: string;
  title: string;
  fullAddress: string;
  address?: string;
  city?: string;
  state?: string;
  pinCode?: string;
  country?: string;
  perks: string[];
  rating: string;
  checkIn?: number | string | null;
  checkOut?: number | string | null;
  maxGuests: number;
  price: number;
  description: string;
  photos: string[];
  rooms: Room[];
  reviews?: Review[];
  isActive?: boolean;
  __v?: number;

  constructor(place: PlaceAPIModel) {
    this._id = place.hotelId || 0;
    this.owner = place.ownerId || "";
    this.title = place.name || "";
    this.fullAddress = `${place.address}, ${place.city}, ${place.state}, ${place.pinCode}, ${place.country}`;
    this.address = place.address || "";
    this.city = place.city || "";
    this.state = place.state || "";
    this.pinCode = place.pinCode || "";
    this.country = place.country || "";
    this.perks = place.amenities.split(',') || [];
    this.rating = place.rating || "";
    this.maxGuests = 10;
    this.price = place.price || 0;
    this.description = place.description || "";
    this.photos = place.images?.length > 0 ? place.images : [];
    this.rooms = place.rooms || [];
    this.reviews = place.reviews || [];
    this.isActive = place.isActive.toString() === 'true' ? true : false;
    this.__v = 0;
  }
}

export class PlaceModelList {
  places: Place[];

  constructor(places: PlaceAPIModel[]) {
    this.places = places.map(place => new PlaceModel(place));
  }
}

export class ReviewsList {
  reviews: Review[];

  constructor(reviews: Review[]) {
    this.reviews = reviews;
  }
}
