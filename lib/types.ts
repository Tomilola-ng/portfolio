export interface HOUSE_INTERFACE {
  name: string;
  slug: string;
  price: string;
  images: any;
  updatedAt: string;
  descripton: string;
  location: LOCATION_INTERFACE;
}

export interface LOCATION_INTERFACE {
  name: string;
  slug: string;
}
