import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';
import { CargaMascotaComponent } from './componentes/carga-mascota/carga-mascota.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "carga",
        component: CargaMascotaComponent,
        // children: [
        //   {
        //     path: "/:id",
        //     component: MascotaComponent
        //   }
        // ]
      }
    ]
  },
  {
    path: "listado",
    component: ListadoComponent
  },
  //defino la variable id para pasarle el numero especifixo
  {
    path: "detalle/:id",
    component: MascotaComponent
  },
  {
    path: "carga",
    component: CargaMascotaComponent
  },
  //agrego una ruta de error para cualquier cosa que no sea lo ya pedido
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
