import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {DynamicFormControlInterface} from '../../interface/dynamic-form.interface';
import {FormInfo} from '../../../entity/form-info';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
})
export class DynamicCheckboxComponent implements OnInit, DynamicFormControlInterface {

  form!: FormInfo<any>;
  formGroup!: FormGroup;

  constructor(private fgDirective: FormGroupDirective) { }

  ngOnInit(): void {
    this.formGroup = this.fgDirective.control;
  }

}
