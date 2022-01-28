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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { MatButtonModule } from '@angular/material/button';
import { SimpleCrudComponent } from './simple-crud/simple-crud.component';
import { PipesComponent } from './pipes/pipes.component';

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
    MaterialDesignComponent,
    SimpleCrudComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
