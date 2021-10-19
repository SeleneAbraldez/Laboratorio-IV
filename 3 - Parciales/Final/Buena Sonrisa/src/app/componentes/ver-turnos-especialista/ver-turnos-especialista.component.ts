import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../../servicios/registro.service";

@Component({
  selector: 'app-ver-turnos-especialista',
  templateUrl: './ver-turnos-especialista.component.html',
  styleUrls: ['./ver-turnos-especialista.component.css']
})
export class VerTurnosEspecialistaComponent implements OnInit {
  turnos = [];
  email;
  resenia;

  constructor(
    private regService: RegistroService,
  ) { }

  ngOnInit(): void {
    this.email = this.regService.traerMail();
    //lamo a los turnos regustrados, pero guardo solo los del cliente actual
    this.regService.obtenerXTodos("turnos").subscribe((auxAutos) => {
      this.turnos = [];
      auxAutos.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        if (prodInfo.especialista == this.email) {
          this.turnos.push(prodInfo);
        }
      })
    });
  }

  public realizarTurno(turno){
    let id: string;
    this.regService.obtenerXTodos("turnos/").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if (turnoInfo.fecha == turno.fecha && turnoInfo.cliente == turno.cliente && turnoInfo.especialista == turno.especialista) {
          id = response.payload.doc.id;

          if(!turno.resenia){
            const dispActulizada = {fecha: turno.fecha, especialista: turno.especialista, cliente: turno.cliente, sala: turno.sala, realizado: "si"};
            this.regService.actualizar("turnos/", id, dispActulizada);
          }else{
            const dispActulizada = {fecha: turno.fecha, especialista: turno.especialista, cliente: turno.cliente, sala: turno.sala, resenia: turno.resenia, realizado: "si"};
            this.regService.actualizar("turnos/", id, dispActulizada);
          }

        }
      })
    });

  }

  public agregarResenia(turno){
    console.log(turno);
    let id: string;
    this.regService.obtenerXTodos("turnos/").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if (turnoInfo.fecha == turno.fecha && turnoInfo.cliente == turno.cliente && turnoInfo.especialista == turno.especialista) {
          id = response.payload.doc.id;

          if(!turno.realizado){
            const dispActulizada = {fecha: turno.fecha, especialista: turno.especialista, cliente: turno.cliente, sala: turno.sala,  resenia: turno.reseniaAux };
            this.regService.actualizar("turnos/", id, dispActulizada);
          }else{
            const dispActulizada = {fecha: turno.fecha, especialista: turno.especialista, cliente: turno.cliente, sala: turno.sala,  realizado: "si", resenia: turno.reseniaAux,};
            this.regService.actualizar("turnos/", id, dispActulizada);
          }

        }
      })
    });
  }

}