import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { Router } from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  signed: boolean;
  payloadname : string;
  parametro: string;


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

    try {
      const token = localStorage.getItem('token');
      const payload = jwt_decode(token);
      this.signed = true;
      this.payloadname = payload.name;
    }
    catch (error) {
      this.signed = false;
    }

  }

  public turnOff(){
    this.signed = false;
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

  buscarCarta(parametro){
    this.router.navigateByUrl("/search/" + parametro);
  }

}
