import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeacherIndexComponent} from './teacher/teacher-index/teacher-index.component';
const routes: Routes = [
  {
    path: '',
    component: TeacherIndexComponent,
    data: {
      title: '教师管理'
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
