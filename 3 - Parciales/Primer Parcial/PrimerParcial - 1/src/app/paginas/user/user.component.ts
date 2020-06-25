import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  payloadname : string;
  payloademail : string;

  constructor() { }

  ngOnInit(): void {
    try {
      const token = localStorage.getItem('token');
      const payload = jwt_decode(token);
      this.payloadname = payload.name;
      this.payloademail = payload.email;
      console.log(payload);
      // this.payloadname = payload.mail;
    }
    catch (error) {
    }
  }

}
