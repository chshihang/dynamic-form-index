import {Component, OnInit} from '@angular/core';
import {FormInfo} from '../../../entity/form-info';
import {MockApplyType} from '../../../assets/mock-form-data';
import {DynamicFormService} from '../../../service/dynamic-form.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
})
export class TeacherAddComponent implements OnInit {

  forms: FormInfo<any>[] = [];

  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit(): void {
    this.forms = this.dynamicFormService.getFormInfos(MockApplyType);
  }
}
