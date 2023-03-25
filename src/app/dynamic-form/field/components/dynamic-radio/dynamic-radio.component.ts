import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {FormInfo} from '../../../../../entity/form-info';
import {DynamicFormControlInterface} from '../../../../../interface/dynamic-form.interface';

@Component({
  selector: 'app-dynamic-radio',
  templateUrl: './dynamic-radio.component.html',
})
export class DynamicRadioComponent implements OnInit, DynamicFormControlInterface {

  form!: FormInfo<any>;
  formGroup!: FormGroup;

  constructor(private fgDirective: FormGroupDirective) { }

  ngOnInit(): void {
    this.formGroup = this.fgDirective.control;
  }

}
