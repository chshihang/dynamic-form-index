import {NgModule} from '@angular/core';
import { FormComponent } from './form/form.component';
import { FieldComponent } from './field/field.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DynamicCheckboxComponent} from './field/components/dynamic-checkbox/dynamic-checkbox.component';
import {DynamicDropdownComponent} from './field/components/dynamic-dropdown/dynamic-dropdown.component';
import {DynamicRadioComponent} from './field/components/dynamic-radio/dynamic-radio.component';
import {DynamicTextboxComponent} from './field/components/dynamic-textbox/dynamic-textbox.component';
import { DynamicErrorComponent } from './field/components/dynamic-error/dynamic-error.component';
import {PortalModule} from '@angular/cdk/portal';

@NgModule({
  declarations: [
    FormComponent,
    FieldComponent,
    DynamicCheckboxComponent,
    DynamicDropdownComponent,
    DynamicRadioComponent,
    DynamicTextboxComponent,
    DynamicErrorComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PortalModule
  ],
  exports: [
    FormComponent
  ]
})
export class DynamicFormModule {
}
