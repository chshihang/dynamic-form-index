import {FieldRecord} from '../../entity/field-record';
import {DataSet} from '../../entity/data-set';

export interface DynamicServiceInterface {
  getValue(fieldRecord: FieldRecord, dataSet?: DataSet): string;
}
