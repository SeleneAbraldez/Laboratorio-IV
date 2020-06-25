import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mail: string = '';
  password: string = '';
  message: string = '';
  spinner: boolean = false;

  constructor(
    public auth: AngularFireAuth, 
    private router: Router
  ) {
    //https://github.com/angular/angular/issues/13831
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // this.router.events.subscribe((evt) => {
    //   if (evt instanceof onanimationend) {
    //     // trick the Router into believing it's last link wasn't previously loaded
    //     this.router.navigated = false;
    //     // if you need to scroll back to top, here is the right place
    //     window.scrollTo(0, 0);
    //   }
    // });
  }

  ngOnInit(): void {}

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
          // coloco un spinner de 3s para avisar que todo salio bien y redirigit al home
          this.message = 'Welcome back!';
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
      this.message = 'Complete all!';
    }
  }
}
