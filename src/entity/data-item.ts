import {DataSet} from './data-set';

export interface DataItem {
  id: number;
  name: string;
  weight: number;
  dataSet: DataSet;
}
