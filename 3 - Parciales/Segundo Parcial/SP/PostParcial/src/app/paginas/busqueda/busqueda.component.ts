import { Component, OnInit, Input } from '@angular/core';
import { ServicioSPService } from "../../servicios/servicio-sp.service"

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  productos = [];
  modificar: boolean = false;
  produ;
  @Input() paramBus : string;


  constructor(
    private regService: ServicioSPService,
  ) { }

  ngOnInit(): void {
    console.log(this.paramBus);
    this.regService.obtenerXTodos("productos").subscribe((auxAutos) => {
      this.productos = [];
      auxAutos.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        // console.log(prodInfo);
        if(prodInfo.nombre == this.paramBus || prodInfo.marca == this.paramBus || prodInfo.stock == this.paramBus || prodInfo.localNombre == this.paramBus || prodInfo.localLocalidad == this.paramBus ){
          this.productos.push(prodInfo);
        }
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
