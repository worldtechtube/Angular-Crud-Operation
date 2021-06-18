import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFeesComponent } from './student-fees/student-fees.component';
import { StudentAddressComponent } from './student-address/student-address.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'addStudent', component : AddStudentComponent},  
    {path: 'addStudent/:id', component : AddStudentComponent},  
    {path: 'studentList', component : StudentListComponent},
    {path: '', redirectTo : '/student-list', pathMatch : 'full'},
    {path: 'student-list', component : StudentListComponent},
    {path: 'student-list/:id/:name/:marks', component : StudentDetailsComponent,
        children : [
            {path: 'fees', component : StudentFeesComponent},
            {path: 'address', component : StudentAddressComponent}
        ]},
    {path: 'studentMarks', component : StudentMarksComponent},
    {path: 'studentDetails', component : StudentDetailsComponent},
    {path: "**", component : NotFoundComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}