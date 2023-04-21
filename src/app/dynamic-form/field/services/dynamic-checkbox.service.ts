import {Injectable} from '@angular/core';
import {DynamicServiceInterface} from '../interface/dynamic-service.interface';
import {FieldRecord} from '../../entity/field-record';
import {DataSet} from '../../entity/data-set';

@Injectable({
  providedIn: 'root'
})
export class DynamicCheckboxService implements DynamicServiceInterface {
  getValue(fieldRecord: FieldRecord, dataSet?: DataSet): string {
    return '';
  }
}
