import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StudentsComponent } from './students/students.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { ParentsComponent } from './parents/parents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StudentsComponent,
    EnrollmentsComponent,
    ParentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
