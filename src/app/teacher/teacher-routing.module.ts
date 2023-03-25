import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherIndexComponent} from './teacher-index/teacher-index.component';
import {TeacherAddComponent} from './teacher-add/teacher-add.component';
import {TeacherEditComponent} from './teacher-edit/teacher-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherIndexComponent,
    data: {
      title: '首页'
    },
    children: [
      {
        path: 'add',
        component: TeacherAddComponent,
      },
      {
        path: 'edit/:teacherId',
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
