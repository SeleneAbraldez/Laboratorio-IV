import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultorios',
  templateUrl: './consultorios.component.html',
  styleUrls: ['./consultorios.component.css']
})
export class ConsultoriosComponent implements OnInit {

  salas = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * 2) + 1;
      // console.log(random);
      let disponible: string;
      if (random === 1) {
        disponible = "libre";
      } else {
        disponible = "ocupado";
      }
      this.salas[i] = { num: i + 1, disp: disponible };
    }
    console.log(this.salas);
  }

}
