import {Component, OnInit} from '@angular/core';
import {FormInfo} from '../dynamic-form/entity/form-info';
import {DynamicFormService} from '../dynamic-form/field/services/dynamic-form.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  teacherId: number | undefined;

  forms: FormInfo<any>[] = [];
  editingApplyId!: number;
  formGroupValue!: Record<string, string>;

  constructor(private dynamicFormService: DynamicFormService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.editingApplyId = Number.parseInt(params.get('id')!);
      const apply = this.dynamicFormService.getApplyById(this.editingApplyId);
      this.forms = this.dynamicFormService.getFormInfos(apply);
    })
  }

  catchValue($event: Record<string, string>): void {
    this.formGroupValue = $event;
    this.dynamicFormService.updateApply(this.editingApplyId, this.formGroupValue);
  }

}
