import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../../servicios/registro.service";

@Component({
  selector: 'app-ver-sesiones',
  templateUrl: './ver-sesiones.component.html',
  styleUrls: ['./ver-sesiones.component.css']
})
export class VerSesionesComponent implements OnInit {

  sesiones = [];

  constructor(
    private regService: RegistroService,
  ) { }

  ngOnInit(): void {
    //lamo a los turnos regustrados, pero guardo solo los del cliente actual
    this.regService.obtenerXTodos("inicios").subscribe((auxAutos) => {
      this.sesiones = [];
      auxAutos.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        this.sesiones.push(prodInfo);
      })
    });
  }

}
