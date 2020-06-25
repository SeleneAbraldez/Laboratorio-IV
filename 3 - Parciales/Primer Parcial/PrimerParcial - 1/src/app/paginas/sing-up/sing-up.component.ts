import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  username: string = "";
  mail: string = "";
  password: string = "";
  message: string = "";
  spinner: boolean = false;

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  //ingresar
  public signUp() {
    // verifico que todos los datos esten presentes
    if (this.mail || this.username || this.password) {
      // y creo el usuario con firebase
      this.auth.createUserWithEmailAndPassword(this.mail, this.password)
        .then(data => {
          var user = firebase.auth().currentUser;
          // tambien guardo el nombre ya que lo vamos a usar mas adelante
          user.updateProfile({
            displayName: this.username
          });
          // coloco un spinner de 3s para avisar que todo salio bien y redirigit al login
          this.spinner = true;
          this.message = "Registration completed! Redirecting to login...";
          setTimeout(() => {
            this.message = "";
            this.spinner = false;
            this.router.navigateByUrl('/login');
          }, 3000)
        })
        // si algo sale mal muestra el mensaje
        .catch(e => {
          this.message = e.message;
        });
    } else {
      this.message = "Complete all!";
    }
  }

  
}
