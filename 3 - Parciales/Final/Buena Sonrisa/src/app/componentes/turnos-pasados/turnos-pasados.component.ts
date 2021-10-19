import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-turnos-pasados',
  templateUrl: './turnos-pasados.component.html',
  styleUrls: ['./turnos-pasados.component.css']
})
export class TurnosPasadosComponent implements OnInit {

  turnos = [];
  email;
  cerrarAca : boolean = true;
  turnoEncuenta;

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
        if(prodInfo.cliente == this.email && prodInfo.realizado){
          this.turnos.push(prodInfo);
        }
      })
    });
  }

}
