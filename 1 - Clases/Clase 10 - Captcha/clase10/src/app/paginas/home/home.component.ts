import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //captcha
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  //formulario
  formulario: FormGroup;
  nombre: FormControl;
  apellido: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombre': new FormControl('as')
    });
  }

  enviar() {
    console.log(grecaptcha.getResponse());
    console.log(this.nombre + " " + this.apellido + " no es un robot!");
  }

  submit(){
    console.log(this.nombre);
    console.log(this.formulario);
  }

}
