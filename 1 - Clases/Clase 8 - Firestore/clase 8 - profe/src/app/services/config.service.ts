import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private endpoint = "http://127.0.0.1:3003/";
  
  constructor() { }

  public getEndpoint (path) {
    return `${this.endpoint}${path}`;
  }
}
