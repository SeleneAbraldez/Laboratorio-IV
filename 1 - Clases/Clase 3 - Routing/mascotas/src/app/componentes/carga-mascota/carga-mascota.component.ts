import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  mascota: any = { nombre: "", foto: "", tipo: "", id: "" };
  veterinaria: Array<Mascota> = [];

  constructor() {
    this.obtenerLocalStorage();
  }

  ngOnInit(): void {
  }

  //obtengo los datos anters de sobreescribirlos
  obtenerLocalStorage() { 
    this.veterinaria = JSON.parse(localStorage.getItem("veterinaria"));
    if(this.veterinaria == null){
      this.mascota.id = 0;
      this.veterinaria = [];
    }else{
      this.mascota.id = this.veterinaria[(this.veterinaria.length)-1].id;
      console.log("Ya habia mascotas! Nuevo ultimo id: " + this.mascota.id);
    }
  }

  //subo la mascota confirmando que no este vacio
  SubirMascota() {
    if (this.mascota.foto != "" && this.mascota.tipo != "" && this.mascota.nombre != "") {
      this.mascota.id++;
      this.veterinaria.push(new Mascota(this.mascota.nombre, this.mascota.foto, this.mascota.tipo, this.mascota.id));
      localStorage.setItem("veterinaria", JSON.stringify(this.veterinaria));
      console.log("Mascota guardada en veterinaria!");
      alert("Se ha guardado la mascota de forma exitosa! Si desea ver la losta de animales vaya al seleccionado 'Listado'");
      console.log("Nombre: " + this.mascota.nombre + ", Enlace de la foto: " + this.mascota.foto + ", Tipo: " + this.mascota.tipo);
    } else {
      alert("Ingrese todos los datos antes de agregar su mascota!");
    }
  }

}
