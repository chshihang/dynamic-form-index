/*
* 表单字段记录
* */
import {Apply} from './apply';
import {Field} from './field';

export interface FieldRecord<T> {
  id: number;
  apply: Apply;
  field: Field;
  value: T;
}
