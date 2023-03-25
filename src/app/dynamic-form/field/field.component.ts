import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormInfo} from '../../../entity/form-info';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {CdkPortalOutlet, ComponentPortal} from '@angular/cdk/portal';
import {DynamicFormControlInterface} from '../../../interface/dynamic-form.interface';
import {DynamicControlsRecords} from './components/control-type-list.config';
import {ComponentType} from '@angular/cdk/portal/portal';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
})
export class FieldComponent implements OnInit, AfterViewInit {

  @ViewChild('virtualContainer', {read: CdkPortalOutlet})
  virtualPortalOutlet!: CdkPortalOutlet;

  @Input() form!: FormInfo<any>;
  formGroup!: FormGroup;
  record = DynamicControlsRecords;

  constructor(private fgDirective: FormGroupDirective) { }

  ngOnInit(): void {
    this.formGroup = this.fgDirective.control;
  }

  portalOpenTask(component: ComponentType<DynamicFormControlInterface>): void {
    this.virtualPortalOutlet.detach();
    const taskDetailComponentPortal = new ComponentPortal<DynamicFormControlInterface>(
      component
    );
    const ref = this.virtualPortalOutlet.attach(taskDetailComponentPortal);
    // 此处同样可以 通过ref.instance传递task参数
    (ref.instance as {form: FormInfo<any>}).form = this.form;
  }

  ngAfterViewInit(): void {
    const component = this.record[this.form.controlType];
    if (component !== undefined) {
      setTimeout(() => {
        this.portalOpenTask(component);
      });
    } else {
      // this.commonService.error(() => {}, `${this.form.controlType}类型不存在`, '逻辑错误');
    }
  }

}
