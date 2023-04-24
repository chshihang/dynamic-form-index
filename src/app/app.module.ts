import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TeacherModule} from './teacher/teacher.module';
import {AppRoutingModule} from './app-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    IndexComponent
  ],
    imports: [
        BrowserModule,
        TeacherModule,
        AppRoutingModule,
        ReactiveFormsModule,
        DynamicFormModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
