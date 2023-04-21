import {RuleType} from './rule-type';

export class FormInfo<T> {
  key: string;  // 字段名
  value: string | undefined;  // 字段属性值
  label: string;  // 标签
  weight: number;  // 顺序
  controlType: string;  // 表单类型，参考components
  type: string;   // 具体类型 email text number ...
  options: {value: T, label: string}[];  // option项(key => value)，radio项(key => value)
  rule = {} as {
    required: boolean; // 默认为true
  };

  constructor(options: {
    value?: string;
    key?: string;
    label?: string;
    weight?: number;
    controlType?: string;
    type?: string;
    options?: {value: T, label: string, weight: number}[];
    rule?: RuleType
  } = {}) {
    this.key = options.key || '';
    this.value = options.value;
    this.label = options.label || '';
    this.weight = options.weight === undefined ? 1 : options.weight;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.rule = options.rule ? options.rule : {required: false} as {required: boolean};
  }
}
