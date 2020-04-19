import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaMascotaComponent } from './componentes/carga-mascota/carga-mascota.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaMascotaComponent,
    ListadoComponent,
    MascotaComponent
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
