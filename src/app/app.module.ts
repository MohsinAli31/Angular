import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CountryComponent } from './country/country.component';
import { StudentComponent } from './student/student.component';
import { Student2Component } from './student2/student2.component';
import { CounterComponent } from './counter/counter.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchComponent } from './switch/switch.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CountryComponent,
    StudentComponent,
    Student2Component,
    CounterComponent,
    IfElseComponent,
    SwitchComponent,
    ForLoopComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
