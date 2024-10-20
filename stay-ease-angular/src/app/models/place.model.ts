export interface Place {
  _id: string;
  owner: string;
  title: string;
  address: string;
  perks: string[];
  extraInfo: string;
  checkIn?: number | null;
  checkOut?: number | null;
  maxGuests: number;
  price: number;
  description: string;
  photos: string[];
  __v?: number;
}
