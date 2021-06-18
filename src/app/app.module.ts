import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddressComponent } from './student-address/student-address.component';
import { StudentFeesComponent } from './student-fees/student-fees.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EnrollmentService } from './enrollment-service.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';  

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentMarksComponent,
    NotFoundComponent,
    StudentComponent,
    StudentListComponent,
    StudentAddressComponent,
    StudentFeesComponent,
    AddStudentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [HttpClientModule,EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }


