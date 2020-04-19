import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaMascotaComponent } from './componentes/carga-mascota/carga-mascota.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaMascotaComponent,
    ListadoComponent,
    MascotaComponent,
    MenuComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
