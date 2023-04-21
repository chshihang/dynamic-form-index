import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeacherIndexComponent} from './teacher/teacher-index/teacher-index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
const routes: Routes = [
  {
    path: 'add',
    component: AddComponent,
    outlet: 'app',
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    outlet: 'app',
  },
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
