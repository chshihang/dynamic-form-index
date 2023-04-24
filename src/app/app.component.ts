import {Component, OnInit} from '@angular/core';
import {ApplyType} from './dynamic-form/entity/apply-type';
import {FormControl} from '@angular/forms';
import {DynamicFormService} from './dynamic-form/field/services/dynamic-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private dynamicFormService: DynamicFormService) {
  }
  applyTypes: ApplyType[] = this.dynamicFormService.getApplyTypes();
  applyTypeId = new FormControl();
  applyType = {} as ApplyType;

  ngOnInit() {
    this.applyTypeId.valueChanges.subscribe(value => {
      const applyTypeId = Number.parseInt(value, 10);
      this.applyTypes.forEach(item => {
        if (item.id === applyTypeId) {
          this.dynamicFormService.applyType = item;
          this.dynamicFormService.sendApplyTypeData(item);
        }
      })
    })
  }
}
