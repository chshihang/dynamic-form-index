import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormInfo} from '../dynamic-form/entity/form-info';
import {DynamicFormService} from '../dynamic-form/field/services/dynamic-form.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {

  forms: FormInfo<any>[] = [];
  formGroupValue!: Record<string, string>;
  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit(): void {
    if (this.dynamicFormService.applyType !== undefined) {
      this.forms = this.dynamicFormService.getFormInfos(this.dynamicFormService.applyType);
    }
    this.dynamicFormService.applyTypeSubject.subscribe(applyType => {
      this.forms = this.dynamicFormService.getFormInfos(applyType);
    })
  }


  catchValue($event: Record<string, string>): void {
    this.formGroupValue = $event;
    this.dynamicFormService.addApply(this.formGroupValue);
  }
}
