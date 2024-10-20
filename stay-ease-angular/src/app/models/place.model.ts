export interface Place {
  _id: string;
  owner: string;
  title: string;
  address: string;
  perks: string[];
  extraInfo: string;
  checkIn: number;
  checkOut: number;
  maxGuests: number;
  price: number;
  description: string;
  photos: string[];
}
