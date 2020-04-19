import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  mascota : any = {nombre: "", foto: "", tipo: ""};
  veterinaria : Array<Mascota> = [];

  constructor(){  }

  ngOnInit(): void {
    //saco la inciializacion porque la pongo en el array, despues la voy a chequear para subir animal
  }

  //subo la mascota confirmando que no este vacio
  SubirMascota(){
    if( this.mascota.foto != "" && this.mascota.tipo != "" && this.mascota.nombre != ""){
      this.veterinaria.push(new Mascota(this.mascota.nombre, this.mascota.foto, this.mascota.tipo));
      console.log("Mascota subida!");
      console.log("Nombre: " + this.mascota.nombre + ", Enlace de la foto: " + this.mascota.foto + ", Tipo: " + this.mascota.tipo);
    }else{
      alert("Ingrese todos los datos antes de agregar su mascota!");
    }    
  }

}
