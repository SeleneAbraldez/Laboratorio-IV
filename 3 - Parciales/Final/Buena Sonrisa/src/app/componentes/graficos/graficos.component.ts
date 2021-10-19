import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  autos = [];
  esp1 = 0;
  esp2 = 0;

  constructor(
    private regService: RegistroService,
  ) { }

  ngOnInit(): void {
    this.autos = [];
    this.regService.obtenerXTodos("turnos").subscribe((auxAutos) => {
      auxAutos.forEach((response: any) => {
        let autoInfo = response.payload.doc.data();
        // console.log(autoInfo);
        if(autoInfo.especialista == "especialista1@hotmail.com"){
          this.esp1++;
        }else if(autoInfo.especialista == "especialista2@gmail.com"){
          this.esp2++;
        }
        this.autos.push(autoInfo);
        // console.log(this.autos);
      })
    });
  }

    public barChartLabels = ['Tipos de registros'];

    public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    public barChartLegend = true;

    public barChartType = 'horizontalBar';

    public chartColors = [
      {
        backgroundColor: ['red'],
      },
      {
        backgroundColor: ['green'],
      }
    ];
}

