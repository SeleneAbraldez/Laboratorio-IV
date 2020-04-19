import { Injectable } from '@angular/core';
import { Persona } from "../clases/persona";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
   }

  private key = "personas";
  public listado : Array<Persona> = [];

//sistema viejo utilizanfo let personas
  // public guardarPersona(persona: any): boolean {
  //   let personas = this.traerPersonas();
  //   console.log(personas);
  //    personas.push(persona);
  //    localStorage.setItem(this.key, JSON.stringify(personas));
  //   return true;
  // }

//nuevo utilizando listado
  public guardarPersona(persona: any): boolean {
    this.listado.push(persona);
    localStorage.setItem(this.key, JSON.stringify(this.listado));
    return true;
  }

//viejo susando let personas
  // public traerPersonas(): Array<Persona> {
  //   try {
  //     let personas = localStorage.getItem(this.key);
  //     if (!personas) {
  //       return [];
  //     }
  //     let listaPersonas = JSON.parse(personas);
  //     this.listado = listaPersonas;
  //     return listaPersonas;
  //   } catch (error) {
  //     return [];
  //   }
  // }

//nuevo usando listado 
  public traerPersonas(): Array<Persona> {
    try {
      let personas = localStorage.getItem(this.key);
      if (!personas) {
        return [];
      }
      let listaPersonas = JSON.parse(personas);
      this.listado = listaPersonas;
      return listaPersonas;
    } catch (error) {
      return [];
    }
  }





}
