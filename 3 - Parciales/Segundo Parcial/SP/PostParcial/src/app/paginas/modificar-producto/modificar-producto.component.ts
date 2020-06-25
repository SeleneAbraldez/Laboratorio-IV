import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Productos } from '../../modales/productos';
// import { Locales } from '../../modales/locales';
import { ServicioSPService } from "../../servicios/servicio-sp.service"

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  @Input() produc: Productos = { nombre: "", marca : "", stock: "", tipo: "", localNombre: "", localLocalidad:"", precio: ""};
  @Output() cerrar = new EventEmitter<void>();

  producAux : Productos = { nombre: "", marca : "", stock: "", tipo: "", localNombre: "", localLocalidad:"", precio: ""};

  message: string = "";
  spinner: boolean = false;

  todoOk : boolean = false;

  locales = [];

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse){
      this.todoOk = true;
    }
  }
  
  constructor(
    private regService: ServicioSPService,
  ) { }

  ngOnInit(): void {
    this.producAux = JSON.parse(JSON.stringify(this.produc));

    this.regService.obtenerXTodos("locales").subscribe((auxAutos) => {
      auxAutos.forEach((response: any) => {
        let localesInfo = response.payload.doc.data();
        this.locales.push(localesInfo);
        // console.log(localesInfo);
      })
    });


  }


  subirProd() {
    let id : string;
    this.regService.obtenerXTodos("productos").subscribe((auxProdusctos) => {
      auxProdusctos.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        if(prodInfo.nombre == this.produc.nombre){
          id = response.payload.doc.id;
          this.regService.actualizar("productos", id, this.producAux);
          this.cerrar.emit();
        }
      })
    });
  }

  cancelar(){
    this.cerrar.emit();
  }

}
