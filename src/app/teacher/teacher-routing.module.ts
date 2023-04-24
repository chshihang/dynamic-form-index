import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherIndexComponent} from './teacher-index/teacher-index.component';
import {TeacherAddComponent} from './teacher-add/teacher-add.component';
import {TeacherEditComponent} from './teacher-edit/teacher-edit.component';

const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherIndexComponent,
    data: {
      title: '首页'
    },
    children: [
      {
        path: 'teacher/add',
        component: TeacherAddComponent,
      },
      {
        path: 'teacher/edit/:teacherId',
        component: TeacherEditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
