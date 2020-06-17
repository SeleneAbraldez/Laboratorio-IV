import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = "mariorampi@gmail.com";
  password: string = "123456";

  constructor(
    private http: HttpService, 
    private router: Router,
    public auth: AngularFireAuth
    ) { }

  ngOnInit(): void {
  }

  public ingresar() {
  
    this.auth.signInWithEmailAndPassword(this.user, this.password)
    .then(user => {
      console.log(user);
      console.log(this.auth.currentUser)
    })
    .catch(e => {
      console.log(e);
    });
    
    // this.auth.si
    // this.http.login(this.user, this.password)
    // .subscribe(data => {
    //   console.log(data);
    //   if (data['token']) {
    //     localStorage.setItem('token', data['token']);
    //     this.router.navigateByUrl('privada');
    //   }
    // });
  }

}
