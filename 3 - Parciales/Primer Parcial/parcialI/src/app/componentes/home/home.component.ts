import { Component, OnInit } from '@angular/core';

import { HttpService } from "../../servicios/http.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mazo: Array<any>;

  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {

    this.http.get()
    .subscribe((data:Array<any>)=>{  //utilizamos subs en vesz de then, hay que desubs para no actualizar constantemente
      console.log(data)
      this.mazo = data;
    }, error=>{
      console.log(error);
    });


  }

}
