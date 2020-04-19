import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //recibimos las mascotas
  @Input() mascota: Mascota;
  //le enviamos la mascota detallada
  @Output() enviarAMascotaEvent = new EventEmitter<Mascota>();
  mostrarDetalles : boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  VerDetalles(){
    this.enviarAMascotaEvent.emit();
    this.mostrarDetalles = true;
  }

}
