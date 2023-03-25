/*
* 字段类型
* */

import {FieldValidator} from './field-validator';

export interface FieldType {
  id: number;

  type: string;

  fieldValidators: FieldValidator[];
}
