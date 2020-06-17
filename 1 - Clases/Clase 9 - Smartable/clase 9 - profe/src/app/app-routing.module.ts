import { NgModule, Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { PublicaComponent } from './pages/publica/publica.component';
import { PrivadaComponent } from './pages/privada/privada.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { PrivadaAdminComponent } from './pages/privada-admin/privada-admin.component';
import { CreateComponent } from './pages/create/create.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'publica', component: PublicaComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'privada',
    component: PrivadaComponent,
    canActivate: [AuthGuard],
    children: []
  },
  {
    path: 'privadaAdmin',
    component: PrivadaAdminComponent,
    canActivate: [AuthGuard, AuthAdminGuard],
    children: []
  },
  {
    path: '**', component: ErrorComponent
  }
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
