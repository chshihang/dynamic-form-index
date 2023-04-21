import {DynamicTextboxComponent} from './dynamic-textbox/dynamic-textbox.component';
import {DynamicRadioComponent} from './dynamic-radio/dynamic-radio.component';
import {DynamicDropdownComponent} from './dynamic-dropdown/dynamic-dropdown.component';
import {DynamicCheckboxComponent} from './dynamic-checkbox/dynamic-checkbox.component';
import {ComponentType} from '@angular/cdk/portal/portal';
import {DynamicFormControlInterface} from '../interface/dynamic-form.interface';
import {DynamicServiceInterface} from '../interface/dynamic-service.interface';
import {DynamicTextboxService} from '../services/dynamic-textbox.service';
import {DynamicRadioService} from '../services/dynamic-radio.service';

// 自定义组件配置类
export const DynamicControlsRecords: Record<string, ComponentType<DynamicFormControlInterface>> = {
  textbox: DynamicTextboxComponent,
  radio: DynamicRadioComponent,
  dropdown: DynamicDropdownComponent,
  checkbox: DynamicCheckboxComponent
};


// 带有选项的自定义配置索引
export const DynamicOptionControls: string[] = [
  'radio',
  'dropdown'
];

export const DynamicValueServices: Record<string, DynamicServiceInterface> = {
  textbox: new DynamicTextboxService,
  radio: new DynamicRadioService,
}
