import {Injectable} from '@angular/core';
import {DynamicServiceInterface} from '../interface/dynamic-service.interface';
import {FieldRecord} from '../../entity/field-record';
import {DataSet} from '../../entity/data-set';

@Injectable({
  providedIn: 'root'
})
export class DynamicRadioService implements DynamicServiceInterface {
  getValue(fieldRecord: FieldRecord, dataSet?: DataSet): string {
    let value = '';
    dataSet!.items.forEach(item => {
      if (item.id === Number(fieldRecord.value)) {
        value = item.name;
      }
    })
    return value;
  }
}
