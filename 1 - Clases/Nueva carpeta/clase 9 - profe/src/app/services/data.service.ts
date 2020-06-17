import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

const CHAT = 'prueba/utn/chat';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private firestore: AngularFirestore) { }

  getChats (): Observable<any> {

    let chat = this.firestore.collection(CHAT);
    
    // this.listaChat = chat.valueChanges();
    return chat.valueChanges()
  }

  deleteOne (id): Promise<any> {

    let chat = this.firestore.collection(CHAT);

    return chat.doc(id).delete();
  }
}
