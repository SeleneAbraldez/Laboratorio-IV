import { Component, OnInit } from '@angular/core';
import { Locales } from '../../modales/locales';
import { ServicioSPService } from "../../servicios/servicio-sp.service"

@Component({
  selector: 'app-carga-locales',
  templateUrl: './carga-locales.component.html',
  styleUrls: ['./carga-locales.component.css']
})
export class CargaLocalesComponent implements OnInit {

  locals: Locales = { nombre: "", email: "", telefono: "", localidad: ""};

  message: string = "";
  spinner: boolean = false;

  todoOk : boolean = false;

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

  }


  subirLocal() {
    this.regService.guardarLocal(this.locals);
    setTimeout(() => {
      this.message = 'Local guardado!';
      this.spinner = false;
    }, 3000);
  }

}
