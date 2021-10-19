import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../../servicios/registro.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sacar-turno-recepcionista',
  templateUrl: './sacar-turno-recepcionista.component.html',
  styleUrls: ['./sacar-turno-recepcionista.component.css']
})
export class SacarTurnoRecepcionistaComponent implements OnInit {

  turno = { especialista: "", fecha: "" };
  fechasDisp = [];
  turnoCompleto: any;
  mail : string;
  nombre;

  message: string = "";
  spinner: boolean = false;

  constructor(
    private regService: RegistroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mail = this.regService.traerMail();
  }

  //busco dnetro del especialista seleccionado todas las fechas que trabaja
  buscarFechas(especialista: string) {
    if (especialista == "") {

    } else {
      this.regService.obtenerXTodos("usuarios/" + especialista + "/turnos").subscribe((auxDatos) => {
      this.fechasDisp = [];
        auxDatos.forEach((response: any) => {
          let userInfo = response.payload.doc.data();
          let fechasAux = [];
          fechasAux.push(userInfo);
          this.fechasDisp.push(fechasAux[0]);
          // console.log(this.fechasDisp);
        })
      });
    }
  }


  sacarTurno() {
    //primero cambio la disponibilidad de la fecha del especialista
    let id: string;
    this.regService.obtenerXTodos("usuarios/" + this.turno.especialista + "/turnos").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let fechaInfo = response.payload.doc.data();
        if (fechaInfo.fecha == this.turno.fecha) {
          id = response.payload.doc.id;
          const dispActulizada = { fecha: fechaInfo.fecha, disponible: "no" };
          this.regService.actualizar("usuarios/" + this.turno.especialista + "/turnos", id, dispActulizada);
        }
      })
    });
    //luego guardo todos los datos en la abse de datos
    this.turnoCompleto = {cliente: this.nombre, especialista: this.turno.especialista, fecha: this.turno.fecha}
    this.regService.guardarTurno(this.turnoCompleto);
  }
}
