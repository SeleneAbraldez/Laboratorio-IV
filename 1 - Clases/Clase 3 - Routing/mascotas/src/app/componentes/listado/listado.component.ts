import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //recibimos las mascotas
  // @Input() mascota: Mascota;
  //le enviamos la mascota detallada
  // @Output() enviarAMascotaEvent = new EventEmitter<Mascota>();
  veterinaria : any;
  mostrarDetalles : boolean = false;

  constructor(private router: Router) {
    this.obtenerDatosVeterinaria();
   }

  ngOnInit(): void {
  }

  obtenerDatosVeterinaria(){
    this.veterinaria = JSON.parse(localStorage.getItem("veterinaria"));
    if(this.veterinaria != null)
      console.log("Datos de veterinaria recuperada!" + JSON.stringify(this.veterinaria));
    else
      console.log("ERROR - No hay animales cargados!");
  }

  VerDetalles(id: number){
    this.router.navigate(["detalle/" + id]);
    // console.log(id);
  }

}
