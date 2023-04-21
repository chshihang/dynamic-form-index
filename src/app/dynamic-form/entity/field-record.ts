/*
* 表单字段记录
* */
import {Apply} from './apply';
import {Field} from './field';

export interface FieldRecord {
  id: number;
  apply: Apply;
  field: Field;
  value: string | number;
}
