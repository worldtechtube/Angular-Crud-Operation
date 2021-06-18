import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentClass } from '../studentClass';
import { EnrollmentService } from '../enrollment-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentModel : StudentClass;
  constructor(private _enrollmentService: EnrollmentService, private route : ActivatedRoute, private router : Router) { 
  }

  ngOnInit() {
    var id = parseInt(this.route.snapshot.paramMap.get('id'));
    this._enrollmentService.getStudent(id).subscribe(data => this.studentModel = data); 
  }

  gotoStudentList(){
    this.router.navigate(['/studentList']); 
  }

  showFees(){
    this.router.navigate(['fees'], {relativeTo: this.route});
  }

  showAddress(){
    this.router.navigate(['address'], {relativeTo: this.route});
  }
}
