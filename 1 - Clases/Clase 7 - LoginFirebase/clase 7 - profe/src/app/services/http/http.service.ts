import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public login(user, pass) {
    const url = this.config.getEndpoint('login');

    let cliente = {user, pass};

    return this.http.post(url, {cliente});
  }

  public getClientes() {
    const url = this.config.getEndpoint('clientes');


    return this.http.get(url);
  }

  public getPaises () {

    return this.http.get('https://restcountries.eu/rest/v2/region/europe')
  }
}
