import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from "./servicios/storage.service"
import { CargarComponent } from './componentes/cargar/cargar.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { CardComponent } from './componentes/card/card.component';
import { LabelComponent } from './componentes/label/label.component'

@NgModule({
  declarations: [
    AppComponent,
    CargarComponent,
    ListadoComponent,
    CardComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
