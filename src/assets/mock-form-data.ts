import {Field} from '../app/dynamic-form/entity/field';
import {Apply} from '../app/dynamic-form/entity/apply';
import {FieldRecord} from '../app/dynamic-form/entity/field-record';
import {DataSet} from '../app/dynamic-form/entity/data-set';
import {DataItem} from '../app/dynamic-form/entity/data-item';
import {ApplyType} from '../app/dynamic-form/entity/apply-type';
import {FieldValidator} from '../app/dynamic-form/entity/field-validator';

const MockDataItems = [
  {id: 1, name: '男', weight: 2, dataSet: {id: 1} as DataSet},
  {id: 2, name: '女', weight: 1, dataSet: {id: 1} as DataSet},
] as DataItem[];

export const MockDataSets = [
  {id: 1, name: '性别', items: MockDataItems}
] as DataSet[];

const MockFieldValidators = [
  {id: 1, name: '是否必需', key: 'required', value: true}
] as FieldValidator[];

const MockFields1 = [
  {id: 1, fieldType: {id: 1, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'name', label: '名称', weight: 1, type: 'text', isShow: true},
  {id: 2, fieldType: {id: 2, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'username', label: '用户名', weight: 2, type: 'text', isShow: false},
  {id: 3, fieldType: {id: 3, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'email', label: '邮箱', weight: 3, type: 'email', isShow: true},
  {id: 4, fieldType: {id: 4, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'jobNumber', label: '工号', weight: 4, type: 'number', isShow: false},
  {id: 5, fieldType: {id: 5, type: 'radio'}, fieldValidators: MockFieldValidators,
    key: 'sex', label: '性别', dataSet: MockDataSets[0], weight: 5, type: '', isShow: true},
] as Field[];
const MockFields2 = [
  {id: 6, fieldType: {id: 6, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'name', label: '申请人姓名', weight: 1, type: 'text', isShow: true},
  {id: 7, fieldType: {id: 7, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'reason', label: '申请原因', weight: 2, type: 'text', isShow: false},
  {id: 8, fieldType: {id: 8, type: 'textbox'}, fieldValidators: MockFieldValidators,
    key: 'destination', label: '目的地', weight: 3, type: 'text', isShow: true},
] as Field[];

export const MockApplyType = {
  id: 1, name: '教师新增', fields: MockFields1
} as ApplyType;
export const MockApplyType2 = {
  id: 2, name: '出校申请', fields: MockFields2
} as ApplyType;
export const MockApplyTypes = [
  MockApplyType, MockApplyType2
] as ApplyType[];

const MockFieldRecords1 = [
  {id: 1, apply: {id: 1}, field: MockFields1[0], value: '张三'},
  {id: 2, apply: {id: 1}, field: MockFields1[1], value: 'zhangsan'},
  {id: 3, apply: {id: 1}, field: MockFields1[2], value: 'zhangsan@yunzhi.club'},
  {id: 4, apply: {id: 1}, field: MockFields1[3], value: '0621211001'},
  {id: 5, apply: {id: 1}, field: MockFields1[4], value: 2},
] as FieldRecord[];

const MockFieldRecords2 = [
  {id: 6, apply: {id: 2}, field: MockFields1[0], value: '李四'},
  {id: 7, apply: {id: 2}, field: MockFields1[1], value: 'lisi'},
  {id: 8, apply: {id: 2}, field: MockFields1[2], value: 'lisi@yunzhi.club'},
  {id: 9, apply: {id: 2}, field: MockFields1[3], value: '0646822112'},
  {id: 10, apply: {id: 2}, field: MockFields1[4], value: 1},
] as FieldRecord[];

const MockFieldRecords3 = [
  {id: 11, apply: {id: 3}, field: MockFields2[0], value: '王五'},
  {id: 12, apply: {id: 3}, field: MockFields2[1], value: '就医'},
  {id: 13, apply: {id: 3}, field: MockFields2[2], value: '医院'},
] as FieldRecord[];

export const MockApply = {
  id: 1, applyType: MockApplyType, status: 0, fieldRecords: MockFieldRecords1
} as Apply;

export const MockApplys = [
  MockApply,
  {id: 2, applyType: MockApplyType, status: 0, fieldRecords: MockFieldRecords2},
  {id: 3, applyType: MockApplyType2, status: 0, fieldRecords: MockFieldRecords3}
] as Apply[];
