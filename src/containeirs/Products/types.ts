import { Manufacturer, ProductType } from 'generated/graphql';

export interface ProductData {
  id: string;
  name: string;
  manufacturer: Manufacturer;
  type: ProductType;
  details: string;
  photoUrl: string;
}

export interface ReviewFormData {
  aroma: number;
  taste: number;
  bitterness: number;
  energy: number;
  price: number;
  overall: number;
  description: string;
  productId: string;

  // In order to set error
  additional?: string;
}
