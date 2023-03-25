/*
 * 申请类型
 * */

import {Field} from './field';

export interface ApplyType {
  id: number;
  // 申请名称
  name: string;

  fields: Field[];
}
