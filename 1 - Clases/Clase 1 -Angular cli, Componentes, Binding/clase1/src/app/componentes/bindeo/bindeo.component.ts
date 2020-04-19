import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-bindeo',
  templateUrl: './bindeo.component.html',
  styleUrls: ['./bindeo.component.css']
})
export class BindeoComponent implements OnInit {
  nombre: string;
  srcFoto: string;
  constructor() { }

  ngOnInit(): void {
    this.nombre = ""
    this.srcFoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_NWPTNBdm4sYaj8B5EB7bM9J2vXTegcrH-Wvkmz_-bg2GKGwB&usqp=CAU"
  }

  public enviar(event): void {
    console.log("Nombre: " +  this.nombre);
  }

  public sacarTurno(e) {
    console.log(e);
  }
}
