import { Component, OnInit, Input } from '@angular/core';
import { RegistroService } from "../../servicios/registro.service";

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {

  @Input() turno;
  @Input() cerrar : boolean;


  especialista = 0;
  clinica = 0;
  resenia : string ;
  // cerrar : boolean = false;

  constructor(
    private regService: RegistroService,
  ) { }

  ngOnInit(): void {


  }

  cerrarEncuesta(){
    this.cerrar = true;
  }

  agregarEncuesta(){
    let id : string;
    this.regService.obtenerXTodos("turnos").subscribe((auxturno) => {
      auxturno.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if(turnoInfo.cliente == this.turno.cliente && turnoInfo.especialista == this.turno.especialista && turnoInfo.fecha == this.turno.fecha ){
          id = response.payload.doc.id;
          let entrevista = {eEsp: this.especialista, eClin: this.clinica, eResen: this.resenia};
          let turnoEncues;
          if(turnoInfo.resenia){
            turnoEncues = { cliente: turnoInfo.cliente, especialista: turnoInfo.especialista, fecha: turnoInfo.fecha, sala: turnoInfo.sala, realizado: turnoInfo.realizado, resenia: turnoInfo.resenia, entrevista: entrevista};
          }else{
            turnoEncues = { cliente: turnoInfo.cliente, especialista: turnoInfo.especialista, fecha: turnoInfo.fecha, sala: turnoInfo.sala, realizado: turnoInfo.realizado, entrevista: entrevista};
          }
          this.regService.actualizar("turnos/", id, turnoEncues);
        }
      })
    });
    this.cerrar = true;
  }

}
