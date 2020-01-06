export interface ProductData {
  id: string;
  name: string;
  manufacturer: {
    id: string;
    name: string;
  };
  type: {
    id: string;
    name: string;
  };
  details: string;
}
