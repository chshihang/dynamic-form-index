import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormInfo} from '../entity/form-info';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  formGroup!: FormGroup;

  forms: FormInfo<any>[] = [];

  @Input()
  set formInfos(forms: FormInfo<any>[]) {
    this.setForm(forms)
  }
  @Output()
  formGroupValue = new EventEmitter<Record<string, string>>();

  setForm(forms: FormInfo<any>[]): void {
    this.forms = forms;
    this.formGroup = this.toFormGroup(forms as FormInfo<any>[]);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formGroupValue.emit(this.formGroup.value);
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
