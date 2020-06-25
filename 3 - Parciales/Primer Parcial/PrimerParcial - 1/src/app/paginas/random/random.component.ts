import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../servicios/http.service";
import { TitulosPipe } from "../../pipes/titulos.pipe";


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  cartaRandom: any;

  constructor(
    private http: HttpService,
    private titulosPipe: TitulosPipe,
  ) { }

  ngOnInit(): void {
    // llama el hhtp de random card
    this.http.getRandom()
    .subscribe((data:Array<any>)=>{ 
      // console.log(data)
      this.cartaRandom = data;
    }, error=>{
      alert(error.message);
    });
  }

}
