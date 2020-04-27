import { NgModule, Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./paginas/home/home.component";
import { PublicaComponent } from './paginas/publica/publica.component';
import { PrivadaComponent } from './paginas/privada/privada.component';
import { ErrorComponent } from './paginas/error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "publica", 
    component: PublicaComponent
  },
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path: "privada", 
    component: PrivadaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**", 
    component: ErrorComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
