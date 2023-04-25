import { Component, OnInit } from '@angular/core';
import {DynamicFormService} from '../dynamic-form/field/services/dynamic-form.service';
import {TableLabel} from '../dynamic-form/entity/table-label';
import {Apply} from '../dynamic-form/entity/apply';
import {ApplyType} from '../dynamic-form/entity/apply-type';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  constructor(private dynamicFormService: DynamicFormService) { }
  labels: TableLabel[] = [];
  applys: Apply[] = [];
  contents: Record<string, string>[] = [];
  applyTypes: ApplyType[] = this.dynamicFormService.getApplyTypes();
  applyTypeId = new FormControl();
  applyType = {} as ApplyType;

  ngOnInit(): void {
    this.initView();
    this.applyTypeId.valueChanges.subscribe(() => {
      this.setApplyType();
      this.renderData();
    })
  }

  renderData(): void {
    this.applys = this.dynamicFormService.getApplysByApplyType(this.applyType);
    this.labels = this.dynamicFormService.getLabelsByApplyType(this.applyType);
    this.contents = this.dynamicFormService.getContentsByApplys(this.applys);
  }

  private setApplyType(): void {
    this.applyTypes.forEach(applyType => {
      if (applyType.id === Number(this.applyTypeId.value)) {
        this.applyType = applyType;
      }
    })
  }

  private initView() {
    console.log('initView', [...this.applyTypes], );
    this.applyTypeId.setValue(this.applyTypes[0].id);
    this.setApplyType();
    this.renderData();
  }
}
