import {Component, OnInit} from '@angular/core';
import {FormInfo} from '../../dynamic-form/entity/form-info';
import {DynamicFormService} from '../../dynamic-form/field/services/dynamic-form.service';
import {MockApplyType1} from '../../MockData';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
})
export class TeacherAddComponent implements OnInit {

  forms: FormInfo<any>[] = [];

  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit(): void {
    this.forms = this.dynamicFormService.getFormInfos(MockApplyType1);
  }
}
