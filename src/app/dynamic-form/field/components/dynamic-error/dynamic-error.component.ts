import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {FormInfo} from '../../../entity/form-info';

@Component({
  selector: 'app-dynamic-error',
  templateUrl: './dynamic-error.component.html',
})
export class DynamicErrorComponent implements OnInit {

  @Input() form!: FormInfo<any>;
  formGroup!: FormGroup;

  constructor(private fgDirective: FormGroupDirective) { }

  ngOnInit(): void {
    this.formGroup = this.fgDirective.control;
  }

  isShowError(): boolean {
    const formControl = this.formGroup.controls[this.form.key];
    return formControl.dirty && formControl.invalid;
  }

}
