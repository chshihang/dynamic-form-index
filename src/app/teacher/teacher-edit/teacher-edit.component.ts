import { Component, OnInit } from '@angular/core';
import {FormInfo} from '../../dynamic-form/entity/form-info';
import {MockApply} from '../../../assets/mock-form-data';
import {DynamicFormService} from '../../dynamic-form/field/services/dynamic-form.service';

@Component({
  selector: 'app-edit',
  templateUrl: './teacher-edit.component.html',
})
export class TeacherEditComponent implements OnInit {
  teacherId: number | undefined;

  forms: FormInfo<any>[] = [];

  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit(): void {
    this.forms = this.dynamicFormService.getFormInfos(MockApply);
  }

}
