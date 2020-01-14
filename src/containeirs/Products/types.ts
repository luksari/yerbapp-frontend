import { Manufacturer, ProductType } from 'generated/graphql';

export interface ProductData {
  id: string;
  name: string;
  manufacturer: Manufacturer;
  type: ProductType;
  details: string;
  photoUrl: string;
}
