import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public student : any = {
    id: "", name : "", marks : ""
  };
  AddStudent(obj){
    this.router.navigate(['/studentDetails', obj.id, obj.name, obj.marks]);
  }

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
