import { Component, OnInit } from '@angular/core';
import { ServicioSPService } from "../../servicios/servicio-sp.service"


@Component({
  selector: 'app-table-productos',
  templateUrl: './table-productos.component.html',
  styleUrls: ['./table-productos.component.css']
})
export class TableProductosComponent implements OnInit {

  productos = [];
  modificar: boolean = false;
  produ;

  constructor(
    private regService: ServicioSPService,
  ) { }

  ngOnInit(): void {
    this.regService.obtenerXTodos("productos").subscribe((auxAutos) => {
      this.productos = [];
      auxAutos.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        // console.log(prodInfo);
        this.productos.push(prodInfo);
      })
    });
  }

  modificarPro(producto) {
    this.modificar = true;
    this.produ = producto;
  }

  cerrarModificarPro(){
    this.modificar = false;
  }

}
