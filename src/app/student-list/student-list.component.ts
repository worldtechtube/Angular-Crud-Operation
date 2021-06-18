import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment-service.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: any[]; 

  constructor(private _enrollmentService: EnrollmentService, private router : Router) { 
    console.log("constructor calling..");    
    } 
  getAllStudents(){
    this._enrollmentService.getAllStudents().subscribe(
      data => this.students = data,
      error => console.log('Error in getting stud list'),
        () => {console.log('success to update stud list...');
      }); 
  }
  public deleteStudent(id, index)
   {
      this._enrollmentService.deleteStudent(id)
      .subscribe(
        ()=>{
          data => console.log('success', data);
          this.students.splice(index,1);
        },
        error => console.log('Error', error)
      );
   }
   editStudent(student)
   {
    this.router.navigate(['/addStudent', student.id]); 
   }
   studentDetails(id)
   {
    this.router.navigate(['/studentDetails', id]); 
   }
   
  ngOnInit() {  
    console.log("ngOnInit method calling..");
    this.getAllStudents();
  }
}
