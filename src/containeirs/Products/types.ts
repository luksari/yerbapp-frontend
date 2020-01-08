import { SelectableItem } from 'utils/types';

export interface ProductData {
  id: string;
  name: string;
  manufacturer: SelectableItem;
  type: SelectableItem;
  details: string;
}
