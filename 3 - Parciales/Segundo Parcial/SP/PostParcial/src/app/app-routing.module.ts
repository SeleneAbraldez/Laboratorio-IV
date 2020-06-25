import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './paginas/error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { MapaComponent } from './paginas/mapa/mapa.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
  },
  {
    path: 'maps', component: MapaComponent, canActivate: [AuthGuard],
  },
  
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
