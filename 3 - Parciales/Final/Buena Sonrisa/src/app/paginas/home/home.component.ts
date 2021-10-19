import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  email;
  home: string;

  constructor(
    private regService: RegistroService,
  ) { }
  
  ngOnInit(): void {
    const email = this.regService.traerMail();
    this.regService.obtenerXTodos("usuarios/" + email + "/datos").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let userInfo = response.payload.doc.data(0);
        this.home = userInfo.tipo;
        // console.log(this.home);
      })
    });


    // switch (this.email) {
    //   case "administrador@gmail.com":
    //     this.home = "adm";
    //     break;
    //   case "especialista1@hotmail.com":
    //     this.home = "esp";
    //     break;
    //   case "especialista2@hotmail.com":
    //     this.home = "esp";
    //     break;
    //   case "recepcionsita@gmail.com":
    //     this.home = "rec";
    //     break;
    //   default:
    //     this.home = "cl";
    //     break;
    // }


  }

}
