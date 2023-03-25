import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherIndexComponent } from './teacher-index/teacher-index.component';
import {TeacherRoutingModule} from './teacher-routing.module';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';


/**
 * 教师模块
 */
@NgModule({
  declarations: [TeacherIndexComponent, TeacherAddComponent, TeacherEditComponent],
  exports: [
    TeacherAddComponent,
    TeacherIndexComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    DynamicFormModule
  ]
})
export class TeacherModule { }
