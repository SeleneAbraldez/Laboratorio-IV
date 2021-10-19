import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../../servicios/registro.service";

@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {

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
        if(prodInfo.cliente == this.email && !prodInfo.realizado){
          this.turnos.push(prodInfo);
        }
      })
    });
  }


}
