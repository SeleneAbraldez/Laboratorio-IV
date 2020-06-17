import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http/http.service";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises;
  user: string = "Juan";
  apellido: string = "Perez";
  colRef;
  alumnos;
  listaAlumnos = [];
  listaChat;
  constructor(
    private http: HttpService,
    private firestore: AngularFirestore
    ) { }

  ngOnInit(): void {
    let als = this.firestore.collection('prueba/utn/alumnos');
    let pepe = als.doc("FK0x5MhCQxpyne2Sf5mI");
    this.firestore.collection('prueba/utn/alumnos').doc("FK0x5MhCQxpyne2Sf5mI");
    this.firestore.doc('prueba/utn/alumnos/FK0x5MhCQxpyne2Sf5mI');
    
    let pruebaCol = this.firestore.collection('pruebas');
    let utn = pruebaCol.doc('utn');
    let alumnosCol = utn.collection('alumnos');

    // this.http.getPaises()
    // .subscribe(data => {
    //   console.log(data);
    //   this.paises = data;
    // });
    let fb = this.firestore.collection('prueba/utn/alumnos');
    this.colRef = fb.ref;
    this.alumnos = fb;
    fb.doc("FK0x5MhCQxpyne2Sf5mI").delete()
    .then(data => {
      console.log(data)
    })
    .catch(e => {
      console.log(e)
    })
    let query = this.colRef.where('name', "==", "Juan");

    console.log(query)
    // this.alumnos
    query.get()
    .then(data => {
      console.log(data.docs);
      // this.listaAlumnos.push(...data);
      this.listaAlumnos = data;
    });

    let chat = this.firestore.collection('prueba/utn/chat');

    this.listaChat = chat.valueChanges();
  }

  guardar () {
    console.log(this.user, this.apellido);
    let persona = {
      user: this.user,
      mensaje: this.apellido,
      date: new Date()
    }
    this.colRef.add(persona)
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    })
  }

}
