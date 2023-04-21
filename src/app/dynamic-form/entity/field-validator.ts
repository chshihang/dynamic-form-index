/*
* 表单类型同步校验器
* */

export interface FieldValidator {
  id: number;
  // 名称
  name: string;
  // 关键字
  key: string;
  value: boolean;
}
