import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Cliente } from '../modales/cliente';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
import { AngularFireStorage } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  clie: Cliente;

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private fire: AngularFirestore,
    private storage: AngularFireStorage,
  ) { }

  traerToken() {
    try {
      const token = localStorage.getItem('token');
      const data = jwt_decode(token);
      // this.conce.email = data.email;
      // console.log(this.conce.email);
      return data;
    }
    catch (error) {
    }
  }

  traerMail() {
    const data = this.traerToken();
    return data.email;
  }

  guardarCliente(obj: Cliente) {
    try {
      this.crear("usuarios/" + obj.email + "/datos", obj);
      // this.conce = obj;
    }
    catch (e) {
      console.log(e);
    }
  }

  guardarTurno(obj: any) {
    try {
      this.crear("turnos/", obj);
    }
    catch (e) {
      console.log(e);
    }
  }

  public traerFoto(path: string) {
    return this.storage.ref(path).getDownloadURL();
  }



  public crear(collection: string, data: any) {
    return this.fire.collection(collection).add(data);
  }

  public obtenerXId(collection: string, id: string) {
    return this.fire.collection(collection).doc(id).snapshotChanges();
  }

  public obtenerXTodos(collection: string) {
    return this.fire.collection(collection).snapshotChanges();
  }

  public actualizar(collection: string, id: string, data: any) {
    return this.fire.collection(collection).doc(id).set(data)

  }

  public eliminar(collection: string, id: string) {
    return this.fire.collection(collection).doc(id).delete();
  }

  public subirArchivo(file: any, path: string) {
    return this.storage.upload(path, file);
  }
}
