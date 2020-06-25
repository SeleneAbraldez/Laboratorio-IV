import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

// https://tarot.howlcode.com/api/v1/cards
// http://tarotapi.herokuapp.com/cards
// https://fathomless-sands-06419.herokuapp.com/api/v1/cards

// llamada de todas las cartas
  public get(){
    return this.http.get<Array<any>>("https://fathomless-sands-06419.herokuapp.com/api/v1/cards");
  }

// llamada de 1 carta random
  public getRandom(){
    return this.http.get<Array<any>>("https://fathomless-sands-06419.herokuapp.com/api/v1/spreads/random_card");
  }

// llamada de carta por id recibida  
  public getById(id: string){
    return this.http.get<Array<any>>("https://fathomless-sands-06419.herokuapp.com/api/v1/cards/" + id);
  }

  public getSearch(search: string){
    return this.http.get<Array<any>>("http://tarotapi.herokuapp.com/cards?q=" + search);
  }


}
