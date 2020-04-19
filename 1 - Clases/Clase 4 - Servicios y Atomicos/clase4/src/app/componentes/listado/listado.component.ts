import { Component, OnInit } from '@angular/core';
import { Persona } from "../../clases/persona";
import { StorageService } from "../../servicios/storage.service";
import { HttpService } from "../../servicios/http.service";


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listado: Array<any>;

  constructor(
    private storage: StorageService,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    // this.listado = this.storage.traerPersonas();
    this.listado = this.storage.listado;
    // console.log(this.http.get()); //podemos observar aca el observable
    this.http.get()
    .subscribe((data:Array<any>)=>{  //utilizamos subs en vesz de then, hay que desubs para no actualizar constantemente
      console.log(data)
      this.listado = data;
    }, error=>{
      console.log(error);
    });
  }

}
