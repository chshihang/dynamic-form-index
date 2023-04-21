/*
* 表单字段
* */
import {FieldType} from './field-type';
import {ApplyType} from './apply-type';
import {FieldValidator} from './field-validator';
import {DataSet} from './data-set';

export interface Field {
  id: number;
  // 字段类型
  fieldType: FieldType;
  // 申请类型
  applyType: ApplyType;
  // 验证器
  fieldValidators: FieldValidator[];
  // 对于一些需要选择的数据规定其数据集（如性别，入学年份）
  dataSet: DataSet;

  // 字段关键字
  key: string;
  // 字段标签
  label: string;
  weight: number;
  // 细分类型 text number email
  type: string;
  isShow: boolean; // 是否在index界面显示
}
