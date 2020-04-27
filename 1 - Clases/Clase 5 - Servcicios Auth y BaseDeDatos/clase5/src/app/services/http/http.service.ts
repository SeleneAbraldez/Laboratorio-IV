import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient, 
    private config: ConfigService
   ) { }

  public login(user, pass){
    const url = this.config.getEndpoint("login");
    //se llama clirente porque la api del profe requiere de un sistema cliente, yo como no tengo ninguna
    //para mandarle la informacionno tendria sentido, sin embargo voy a copiar todo su codigo por si als moscas
    let cliente = {user, pass};
    return this.http.post(url, {cliente});
  }
}
 