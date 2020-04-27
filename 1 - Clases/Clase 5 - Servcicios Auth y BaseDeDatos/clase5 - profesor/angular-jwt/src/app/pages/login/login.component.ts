import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = "juan";
  password: string = "123";

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
  }

  public ingresar() {
    
    this.http.login(this.user, this.password)
    .subscribe(data => {
      console.log(data);
      //es un array porque ide que devuelva la confirmacion, no esta bien hecho con arrays pero
      //es para salir del paso, subs deberia teenr una respuesta del tipo que queremosd
      if (data['token']) {
        localStorage.setItem('token', data['token']);
        this.router.navigateByUrl('privada');
      }
    });
  }

}
