import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { Router } from "@angular/router";
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  signed: boolean;
  nombre: string;
  foto: string;
  parametro: string;
  usuario = [];

  constructor(
    private router: Router,
    private regService: RegistroService,
  ) { }

  ngOnInit(): void {
    const email = this.regService.traerMail();
    this.regService.obtenerXTodos("usuarios/" + email + "/datos").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let userInfo = response.payload.doc.data(0);
        this.foto = userInfo.foto;
        this.nombre = userInfo.nombre;
      })
    });

  }

  public turnOff() {
    this.signed = false;
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
