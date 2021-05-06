import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { ParentsComponent } from './parents/parents.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: "students", component: StudentsComponent },
  { path: "enrollments", component: EnrollmentsComponent },
  { path: "parents", component: ParentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
