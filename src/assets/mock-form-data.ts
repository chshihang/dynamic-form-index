import {Field} from '../entity/field';
import {Apply} from '../entity/apply';
import {FieldRecord} from '../entity/field-record';
import {DataSet} from '../entity/data-set';
import {DataItem} from '../entity/data-item';
import {ApplyType} from '../entity/apply-type';
import {FieldValidator} from '../entity/field-validator';

const MockDataItems = [
  {id: 1, name: '男', weight: 2, dataSet: {id: 1} as DataSet},
  {id: 2, name: '女', weight: 1, dataSet: {id: 1} as DataSet},
] as DataItem[];

const MockDataSets = [
  {id: 1, name: '性别', dataItems: MockDataItems}
] as DataSet[];

const MockFieldValidators = [
  {id: 1, name: '是否必需', key: 'required', value: true}
] as FieldValidator[];

const MockFields = [
  {id: 1, fieldType: {id: 1, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'name', label: '名称', weight: 4, type: 'text'},
  {id: 2, fieldType: {id: 2, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'username', label: '用户名', weight: 3, type: 'text'},
  {id: 3, fieldType: {id: 3, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'email', label: '邮箱', weight: 2, type: 'email'},
  {id: 4, fieldType: {id: 4, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'jobNumber', label: '工号', weight: 1, type: 'number'},
  {id: 5, fieldType: {id: 5, type: 'radio'}, fieldValidators: MockFieldValidators,
    key: 'sex', label: '性别', dataSet: MockDataSets[0], weight: 0, type: ''},
] as Field[];

export const MockApplyType = {
  id: 1, name: '教师新增', fields: MockFields
} as ApplyType;

const MockFieldRecords = [
  {id: 1, apply: {id: 1}, field: MockFields[0], value: '张三'},
  {id: 2, apply: {id: 1}, field: MockFields[1], value: 'zhangsan'},
  {id: 3, apply: {id: 1}, field: MockFields[2], value: 'zhangsan@yunzhi.club'},
  {id: 4, apply: {id: 1}, field: MockFields[3], value: '0621211001'},
  {id: 4, apply: {id: 1}, field: MockFields[4], value: 1},
] as FieldRecord<any>[];

export const MockApply = {
  id: 1, applyType: {id: 1, name: 'teacherAdd'}, status: 0, fieldRecords: MockFieldRecords
} as Apply;

