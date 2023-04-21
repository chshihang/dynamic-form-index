/*
* '申请'表单
* */
import {ApplyType} from './apply-type';
import {FieldRecord} from './field-record';

export interface Apply {
  id: number;
  // 申请状态，为便于模拟其他功能暂时使用number
  status: number;

  applyType: ApplyType;

  fieldRecords: FieldRecord[];
}
