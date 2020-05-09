import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from "@angular/common"
import { TestPipe } from '../../pipes/test.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = "Selene";
  monto = 4.20;

  constructor(
    private upperPipe: UpperCasePipe,
    private testPipe: TestPipe,
  ) {
    const upper = this.upperPipe.transform(this.name);
    console.log("UPER:" + upper);
    const test = this.testPipe.transform(this.name);
    console.log("TEST:" + test);
  }

  ngOnInit(): void {
  }

}
