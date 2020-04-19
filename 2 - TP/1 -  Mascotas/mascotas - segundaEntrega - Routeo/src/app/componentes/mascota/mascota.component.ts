import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from '../../clases/mascota';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  // @Input() mascota: Mascota;
  veterinaria: any;
  mascota: Mascota;
  id: string;
  idN: number;
  private routeSub: Subscription;
  error: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    // });
    this.routeSub = this.route.params.subscribe(params => {
      // console.log( "PARAMETROS: "+ params['id']);
      this.id = params['id'];
      console.log( "ID: "+ this.id);
    });
    this.obtenerDatosVeterinaria();
    this.obtenerMascota();
  }

  obtenerDatosVeterinaria() {
    this.veterinaria = JSON.parse(localStorage.getItem("veterinaria"));
    if (this.veterinaria != null)
      console.log("Datos de veterinaria recuperada!" + JSON.stringify(this.veterinaria));
    else
      console.log("ERROR - No hay animales cargados!");
  }

  obtenerMascota() {
    // console.log("veter :" + this.veterinaria);
    // console.log("Detalles Mascota:" + this.id);
    this.idN = parseInt(this.id, 10);
    this.idN--;
    if(this.idN > this.veterinaria.length){
      alert("No hay un mascota cargada con esta id! Redirigiendo al listado...");
      this.router.navigate(["/listado"]);
    }
    this.mascota = new Mascota(this.veterinaria[this.idN].nombre, this.veterinaria[this.idN].foto, this.veterinaria[this.idN].tipo, this.veterinaria[this.idN].id);
    // console.log("Detalles Mascota:" + JSON.stringify(this.mascota));
  }


}
