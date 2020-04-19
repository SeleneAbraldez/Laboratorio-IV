import { Component, OnInit } from '@angular/core';
import { Persona } from "../../clases/persona";
import { StorageService } from "../../servicios/storage.service"

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

  persona: Persona;
  public nombre: string = "Virginia ";
  public apellido: string = "Bolten";

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
  }

  public cargar() {
    this.persona = new Persona(this.nombre, this.apellido);
    console.log(this.persona);
    this.storage.guardarPersona(this.persona);
  }

}
