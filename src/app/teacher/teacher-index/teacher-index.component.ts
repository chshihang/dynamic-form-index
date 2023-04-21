import {Component, OnInit} from '@angular/core';
import {MockApplyType, MockApplyTypes} from '../../../assets/mock-form-data';
import {ApplyType} from '../../dynamic-form/entity/apply-type';
import {FormControl} from '@angular/forms';
import {Apply} from '../../dynamic-form/entity/apply';
import {DynamicFormService} from '../../dynamic-form/field/services/dynamic-form.service';
import {TableLabel} from '../../dynamic-form/entity/table-label';

@Component({
  selector: 'app-teacher-index',
  templateUrl: './teacher-index.component.html',
})
export class TeacherIndexComponent implements OnInit {
  constructor(private dynamicFormService: DynamicFormService) { }
  labels: TableLabel[] = [];
  applys: Apply[] = [];
  contents: Record<string, string>[] = [];
  applyTypes: ApplyType[] = MockApplyTypes;
  applyTypeId = new FormControl();
  applyType = {} as ApplyType;
  ngOnInit(): void {
    this.applyTypeId.valueChanges.subscribe(() => {
      this.setApplyType();
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
}
