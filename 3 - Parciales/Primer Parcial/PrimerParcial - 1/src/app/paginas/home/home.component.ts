import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signed: boolean;

  constructor() { }

  ngOnInit(): void {

    try {
      const token = localStorage.getItem('token');
      const payload = jwt_decode(token);
      this.signed = true;
    }
    catch (error) {
      this.signed = false;
    }

  }

}
