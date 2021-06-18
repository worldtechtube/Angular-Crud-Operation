import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  public name="Mohammad Irshad";
  public blankValueName = "";
  public defaultName = "No Name.";
  constructor() {
   }

  ngOnInit() {
  }

}


