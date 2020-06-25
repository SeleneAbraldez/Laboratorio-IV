import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../../servicios/http.service";
import { Router } from '@angular/router';
import { TitulosPipe } from "../../pipes/titulos.pipe";
import { FavesService } from 'src/app/servicios/faves.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

  @Input() tipo: string;

  currentUser: any;//guardo el usuario actualmente logeado
  spinner: boolean = false;
  mazo: Array<any>;
  listaFavs = [];
  listaUsuarios = [];
  faveada: boolean;
  payloadname;

  constructor(
    private http: HttpService,
    private router: Router,
    private titulosPipe: TitulosPipe,
    private favServi: FavesService,
  ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.http.get()
      .subscribe((data: Array<any>) => {
        this.mazo = data;
        if (this.tipo == "major") {
          this.mazo = this.mazo.slice(0, 22);
        } else if (this.tipo == "minor") {
          this.mazo = this.mazo.slice(22);
        }
        this.ordenarPorNumero();
        this.mazo.forEach(function (e) {
          if (typeof e === "object") {
            e["faved"] = "false";
          }
        });
        this.leerVotos();
        setTimeout(() => {
          this.spinner = false;
        }, 1000);
      }, error => {
        alert(error.message);
      });

    try {
      const token = localStorage.getItem('token');
      const payload = jwt_decode(token);
      this.payloadname = payload.name;
    }
    catch (error) {
    }

  }

  // boton para ir a la pagina del detalle de la carta
  cardId(id: number) {
    this.router.navigateByUrl('/detail/' + id);
  }

  leerVotos(){
    let favs = JSON.parse(this.favServi.traerFavs(this.payloadname));
    this.mazo.forEach(carta => {
      favs.forEach(cartaFaved => {
        if (carta.id == cartaFaved.id) {
          carta['faved'] = 'true';
        }
      });
    });    
  }

  favear(cartaSeleccionada) {
    let estado = this.favServi.guardarFavs(this.payloadname, cartaSeleccionada);
    this.mazo.forEach(carta => {
      if (carta.id == cartaSeleccionada.id) {
        carta['faved'] = estado;
      }
    });
  }

//aca lo mismo, esta todo el regustro de cartyas para poder hacerlo con firebase
//databases era el servicio, cambiar nombre de favServi a ese
  // leerVotos() {
  //   let auxList = [];
  //   this.databases.obtenerXTodos('usuarios').subscribe((votosImgSnap) => {
  //     votosImgSnap.forEach((response: any) => {
  //       let usuarioInfo = response.payload.doc.data();
  //       usuarioInfo["id"] = response.payload.doc.id;
  //       auxList.push(usuarioInfo);
  //       if (usuarioInfo.user == this.payloadname)//guardo todos los datos del usuario actual
  //       {
  //         this.currentUser = usuarioInfo;
  //       }
  //     });

  //     this.listaUsuarios = auxList;
  //   });
  // }

  // actualizarFav() {
  //   this.currentUser.cartas.forEach(auxCarta => {
  //     this.cambiarEstadoEnMazo(auxCarta, "true");
  //   });
  // }

  // eliminarCartaDeLaListaDeCartas(cartas, cartaAEliminar) {
  //   let auxCartas = cartas.filter(carta => {
  //     if (carta.id != cartaAEliminar.id) {
  //       return carta;
  //     }
  //   });
  //   return auxCartas;
  // }

  // cambiarEstadoEnMazo(cartaSeleccionada, estado) {
  //   this.mazo.forEach(carta => {
  //     if (carta.id == cartaSeleccionada.id) {
  //       carta['faved'] = estado;
  //     }
  //   });
  // }

  // favear(cartaSeleccionada) {
  //   let existe = false;
  //   let yaFav = false;
  //   this.listaUsuarios.forEach(usuario => {
  //     if (usuario.user == this.payloadname) {
  //       existe = true;
  //       this.currentUser = usuario;
  //       usuario.cartas.forEach(auxCarta => {
  //         if (auxCarta.id == cartaSeleccionada.id) {//si encuentra la carta actualiza eliminando la que estaba faveada
  //           yaFav = true;
  //           cartaSeleccionada['faved'] = "false";
  //           this.cambiarEstadoEnMazo(cartaSeleccionada, "false");
  //           this.currentUser.cartas = this.eliminarCartaDeLaListaDeCartas(usuario.cartas, cartaSeleccionada);
  //           this.databases.actualizar('usuarios', usuario.id, this.currentUser);
  //         }
  //       });
  //       if (!yaFav) {//agrega la carta faveada a la lista de cartas del usuario
  //         cartaSeleccionada['faved'] = "true";
  //         this.currentUser.cartas.push(cartaSeleccionada);
  //         this.cambiarEstadoEnMazo(cartaSeleccionada, "true");
  //         this.databases.actualizar('usuarios', usuario.id, this.currentUser);
  //       }
  //     }
  //   });
  //   if (!existe) {
  //     cartaSeleccionada['faved'] = "true";
  //     this.databases.crear('usuarios', { 'user': this.payloadname, 'cartas': [cartaSeleccionada] });
  //     this.currentUser = { 'user': this.payloadname, 'cartas': [cartaSeleccionada] };
  //     this.cambiarEstadoEnMazo(cartaSeleccionada, "true");
  //   }
  //   this.leerVotos();
  // }

  ordenarPorNumero() {
    this.mazo.sort(function (a, b) {
      if (a.card_index > b.card_index) {
        return 1;
      } else if (a.card_index < b.card_index) {
        return -1;
      } else if (a.card_index = b.card_index) {
        return 0;
      }
    });
  }

  ordenarPorNombre() {
    this.mazo.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else if (a.name = b.name) {
        return 0;
      }
    });
  }

  ordenarPorResumen() {
    this.mazo.sort(function (a, b) {
      if (a.summary > b.summary) {
        return 1;
      } else if (a.summary < b.summary) {
        return -1;
      } else if (a.summary = b.summary) {
        return 0;
      }
    });
  }

}
