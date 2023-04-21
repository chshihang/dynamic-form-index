import {DataItem} from './data-item';

export interface DataSet {
  id: number;
  name: string;
  items: DataItem[];
}
