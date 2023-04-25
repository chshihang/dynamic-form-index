import {Injectable} from '@angular/core';
import {FormInfo} from '../../entity/form-info';
import {ApplyType} from '../../entity/apply-type';
import {Apply} from '../../entity/apply';
import {Field} from '../../entity/field';
import {RuleType} from '../../entity/rule-type';
import {
  DynamicOptionControls,
  DynamicValueServices
} from '../components/control-type-list.config';
import {FieldValidator} from '../../entity/field-validator';
import {TableLabel} from '../../entity/table-label';
import {DataSet} from '../../entity/data-set';
import {DynamicServiceInterface} from '../interface/dynamic-service.interface';
import {MockApplys, MockApplyTypes, MockDataSets} from '../../../MockData';
import {Observable, Subject} from 'rxjs';
import {FieldRecord} from '../../entity/field-record';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  applyTypeSubject = new Subject<ApplyType>();
  applyType: ApplyType | undefined;
  applys = MockApplys;
  applyId = 4;

  sendApplyTypeData(data: ApplyType): void {
    this.applyTypeSubject.next(data);
  }

  getApplyTypes(): ApplyType[] {
    return MockApplyTypes;
  }
  getFormInfos(object: Apply | ApplyType): FormInfo<any>[] {
    const formInfos: FormInfo<any>[] = [];
    // 判断类别是 apply还是 applyType
    // 使用object instanceof Apply 会报错 TS2693: 'Apply' only refers to a type, but is being used as a value here.
    if ((object as Apply).fieldRecords !== undefined) {
      (object as Apply).fieldRecords.forEach(fieldRecord => {
        formInfos.push(this.getFormInfo(fieldRecord.field, fieldRecord.value));
      });
    } else {
      (object as ApplyType).fields.forEach(field => {
        formInfos.push(this.getFormInfo(field));
      });
      console.log('getFormInfos', formInfos);
    }
    return formInfos.sort((a, b) => a.weight - b.weight);
  }

  private getFormInfo(field: Field, value?: any): FormInfo<any> {
    console.log(field, field.fieldValidators);
    const formInfo = new FormInfo<any>({
      key: field.key,
      label: field.label,
      weight: field.weight,
      controlType: field.fieldType.type,
      type: field.type,
      rule: this.getRule(field.fieldValidators) as unknown as RuleType,
      value
    });
    if (DynamicOptionControls.includes(field.fieldType.type)) {
      formInfo.options = field.dataSet.items.map((item) => {
        return {value: item.id, label: item.name, weight: item.weight};
      });
    }
    return formInfo;
  }

  private getRule(fieldValidators: FieldValidator[]): Record<string, boolean> {
    const rule = {} as Record<string, boolean>;
    fieldValidators?.forEach(fieldValidator => {
      rule[fieldValidator.key] = fieldValidator.value;
    });
    return rule;
  }

  getApplysByApplyType(applyType: ApplyType): Apply[] {
    return this.applys.filter(apply => apply.applyType.id === applyType.id);
  }

  getLabelsByApplyType(applyType: ApplyType): TableLabel[] {
    const labels: TableLabel[] = [];
    applyType.fields.forEach(field => {
      if (field.isShow) {
        labels.push({name: field.label, key: field.key, weight: field.weight} as TableLabel);
      }
    })
    return labels.sort((a, b) => a.weight - b.weight);
  }

  getContentsByApplys(applys: Apply[]): Record<string, string>[] {
    const contents = [] as Record<string, string>[];
    applys.forEach(apply => {
      const fields = apply.applyType.fields;
      const fieldRecords = apply.fieldRecords;
      const content = {} as Record<string, string>;
      fieldRecords.forEach((fieldRecord, index) => {
        if (index === 0) {
          content['id'] = fieldRecord.apply.id.toString();
        }
        fields.forEach(field => {
          if (field.isShow && fieldRecord.field.id === field.id) {
            content[field.key] = (DynamicValueServices[field.fieldType.type] as DynamicServiceInterface)
              .getValue(fieldRecord, field.dataSet);
          }
        })
      })
      contents.push(content);
    })
    return contents;
  }
  getDataSetById(id: number): DataSet {
    let dataSet = {} as DataSet;
    MockDataSets.forEach(mockDataSet => {
      if (mockDataSet.id === id) {
        dataSet = mockDataSet;
      }
    })
    return dataSet;
  }

  getApplyById(applyId: number): Apply{
    return this.applys.filter(apply => apply.id === applyId)[0];
  }

  addApply(formGroupValue: Record<string, string>): void {
    const apply = {
      id: this.applyId++,
      status: 0,
      applyType: this.applyType
    } as Apply;
    const fieldRecords = [] as FieldRecord[];
    this.applyType?.fields.forEach(field => {
      fieldRecords.push(this.getFieldRecord(apply, field, formGroupValue[field.key]));
    })
    apply.fieldRecords = fieldRecords;
    this.applys.push(apply);
  }

  private getFieldRecord(apply: Apply, field: Field, value: string): FieldRecord {
    return {
      apply, field, value
    } as FieldRecord;
  }

  updateApply(applyId: number, formGroupValue: Record<string, string>): void {
    const apply = this.getApplyById(applyId);
    apply.fieldRecords.forEach(fieldRecord => {
      let field = fieldRecord.field;
      fieldRecord.value = formGroupValue[field.key];
    })
  }

}
