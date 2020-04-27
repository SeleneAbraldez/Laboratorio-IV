import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  public ingresar(){
    console.log(this.user, this.password);
    this.http.login(this.user, this.password)
    .subscribe(data => {
      console.log(data)
    })
  }

}
