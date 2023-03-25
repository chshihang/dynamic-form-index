import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormInfo} from '../../../entity/form-info';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  formGroup!: FormGroup;

  @Input() forms: FormInfo<any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.toFormGroup(this.forms as FormInfo<any>[]);
  }

  onSubmit(): void {
    console.log('onSubmit', this.formGroup.value);
  }

  toFormGroup(forms: FormInfo<any>[]): FormGroup {
    const group: any = {};

    forms.forEach(form => {
      group[form.key] = form.rule.required ?
        new FormControl(form.value || '', Validators.required) :
        new FormControl(form.value || '');
    });
    return new FormGroup(group);
  }
}
