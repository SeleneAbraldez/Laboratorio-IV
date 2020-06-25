import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavesService {

  public cartasFaveadas = [];

  constructor(
  ) { }

  traerFavs(usuarix : string){
    let favs = localStorage.getItem(usuarix + "_favs");
    return favs;
  }

  guardarFavs(usuarix: string, infoCarta) {
    let estado : string = 'true';
    let yaFav : boolean = false;
    let favs = this.traerFavs(usuarix);
    //si no existe todavia creo uno
    if (!favs) {
      this.cartasFaveadas.push(infoCarta);
    }else{
      //si ya existe obtengo la lista actualizada
      let listaFavs = JSON.parse(favs);
      this.cartasFaveadas = listaFavs;
      //la recorro para saber si la carta ya esta o no
      this.cartasFaveadas.forEach(fav => {
        //si la encuentro agregada la elimino
        if (fav.id === infoCarta.id) {
          yaFav = true;
          let i = this.cartasFaveadas.indexOf(fav);
          this.cartasFaveadas.splice(i, 1);
          estado = 'false';
        }
      });
      //si al recorrer el array no la encontre la agrego a la lista
      if(!yaFav){
        this.cartasFaveadas.push(infoCarta);
      }
    }
    localStorage.setItem(usuarix + "_favs", JSON.stringify(this.cartasFaveadas));
    return estado;
  }

}



// hice una version que usa firestora para gaurdar los favoritos, pudiendo eliminar y
// gurdar depende la cuenta. dejo el codigo porque me costo mucho y me da pena borrarlo jaja

// import { Injectable } from '@angular/core';
// import { AngularFirestore } from "@angular/fire/firestore";


// @Injectable({
//   providedIn: 'root'
// })
// export class FavesService {

//   constructor(
//     private fire: AngularFirestore,
//   ) { }

//   public crear( faves : string, data : any){
//     return this.fire.collection(faves).add(data);
//   }

//   public obtenerXId( faves : string, id : string){
//     return this.fire.collection(faves).doc(id).snapshotChanges();
//   }

//   public obtenerXTodos( faves : string){
//     return this.fire.collection(faves).snapshotChanges();
//   }

//   public actualizar( faves : string, id : string, data : any){
//     return this.fire.collection(faves).doc(id).set(data);
//   }

//   public eliminar( faves : string, id : string){
//     return this.fire.collection(faves).doc(id).delete();
//   }

// }