import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../../servicios/registro.service";

@Component({
  selector: 'app-ver-turnos-recepcionista',
  templateUrl: './ver-turnos-recepcionista.component.html',
  styleUrls: ['./ver-turnos-recepcionista.component.css']
})
export class VerTurnosRecepcionistaComponent implements OnInit {

  turnos = [];
  email;

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
        this.turnos.push(prodInfo);
      })
    });
  }

  public cancelarTurno(turno){
    console.log(turno);
    let id: string;
    this.regService.obtenerXTodos("turnos/").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if (turnoInfo.fecha == turno.fecha && turnoInfo.cliente == turno.cliente && turnoInfo.especialista == turno.especialista) {
          id = response.payload.doc.id;
            this.regService.eliminar("turnos/", id);
        }
      })
    });
  }


}
