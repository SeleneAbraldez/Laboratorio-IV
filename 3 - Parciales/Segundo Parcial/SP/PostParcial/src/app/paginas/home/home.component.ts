import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modales/usuario';
import { ServicioSPService } from "../../servicios/servicio-sp.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Usu: Usuario = { email: "", nombre: "", password: ""};
  altaLocal : boolean = false;
  altaProd : boolean = false;
  tablaProd : boolean = false;
  parametro: string;
  busqueda : boolean = false;
  parametr : string = "";

  constructor(
    private regService: ServicioSPService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.Usu.nombre = this.regService.traerToken().name;
  }

  buscarPro(parametro){
    this.parametr = parametro;
    this.busqueda = true;
    this.altaLocal = false;
    this.altaProd = false; 
    this.tablaProd = false; 
  }

}
