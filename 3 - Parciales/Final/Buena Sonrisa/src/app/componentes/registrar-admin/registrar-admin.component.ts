import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { Cliente } from '../../modales/cliente';
import { RegistroService } from "../../servicios/registro.service"
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css']
})
export class RegistrarAdminComponent implements OnInit {
  todoOk : boolean = false;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse){
      this.todoOk = true;
      console.log(this.cliente);
    }
  }

  cliente: Cliente = { email: "", nombre: "", contrasenia: "", foto: "", tipo: ""};

  tipoCuenta = "";
  message: string = "";
  spinner: boolean = false;

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private regService: RegistroService
  ) { }

  ngOnInit(): void {
  }

  //ingresar
  public register() {
    // verifico que todos los datos esten presentes
    if (this.cliente.email || this.cliente.nombre || this.cliente.contrasenia) {
      // y creo el usuario con firebase
      this.auth.createUserWithEmailAndPassword(this.cliente.email, this.cliente.contrasenia)
        .then(data => {
          //guardo los datos en mi servicio
          var user = firebase.auth().currentUser;
          let path = "usuarios/" + this.cliente.email + "/";
          this.regService.traerFoto(path).subscribe(data =>{
            this.cliente.foto = data;
            this.regService.guardarCliente(this.cliente);
          })
          // coloco un spinner de 3s para avisar que todo salio bien y redirigit al login
          this.spinner = true;
          this.message = "Registro completado... Redirigiendo al ingreso";
          setTimeout(() => {
            this.message = "";
            this.spinner = false;
            this.router.navigateByUrl('/login');
          }, 3000)
        })
        // si algo sale mal muestra el mensaje
        .catch(e => {
          this.message = e.message;
        });
    } else {
      this.message = "¡Llene todos los campos!";
    }
  }

  subirFoto(event){
    let path = "usuarios/" + this.cliente.email + "/";
    this.regService.subirArchivo(event.target.files[0],path).then(data =>{
      if(data.state == "success"){
        // console.log("si :)");
      }else{
        // console.log("no :(");
      }
    });
  }

}
