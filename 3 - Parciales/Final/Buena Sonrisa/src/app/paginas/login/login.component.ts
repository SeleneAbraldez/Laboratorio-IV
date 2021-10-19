import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail: string = '';
  password: string = '';
  message: string = '';
  spinner: boolean = false;
  todoOk : boolean = false;
  cuenta;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse){
      this.todoOk = true;
    }
  }

  constructor(
    public auth: AngularFireAuth, 
    private router: Router,
    private regService: RegistroService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
  }

  //funcion para ingresar con cuenta ya regustrada
  public logIn() {
    //si estan todos los campos
    if (this.mail || this.password) {
      //ingresa con firebase
      this.auth
        .signInWithEmailAndPassword(this.mail, this.password)
        .then((data) => {
          data.user.getIdToken().then((d) => {
            //y guardo el token en el ls
            localStorage.setItem('token', d);
          });
          if(this.mail !== "administrador@gmail.com"){
            var today = new Date();
            let sesion = {mail: this.mail, today} 
            this.regService.crear("inicios", sesion);
          }
          // coloco un spinner de 3s para avisar que todo salio bien y redirigit al home
          this.message = 'Bienvenidx!';
          this.spinner = true;
          setTimeout(() => {
            this.message = '';
            this.spinner = false;
            this.router.navigateByUrl('/home');
          }, 3000);
        })
        // si hay un error lo muestra
        .catch((e) => {
          this.message = e.message;
        });
    } else {
      this.message = 'Complete todo!';
    }
  }


  selecCuenta(cuenta) {
    switch (cuenta) {
      case "adm": {
        this.mail = "administrador@gmail.com";
        this.password = "123456";
        break;
      }
      case "cli1": {
        this.mail = "cliente1@gmail.com";
        this.password = "123456";
        break;
      }
      case "cli2": {
        this.mail = "cliente2@hotmail.com";
        this.password = "123456";
        break;
      }
      case "rec": {
        this.mail = "recepcionsita@gmail.com";
        this.password = "123456";
        break;
      }
      case "es1": {
        this.mail = "especialista1@hotmail.com";
        this.password = "123456";
        break;
      }
      case "es2": {
        this.mail = "especialista2@gmail.com";
        this.password = "123456";
        break;
      }
    }
  }

}
