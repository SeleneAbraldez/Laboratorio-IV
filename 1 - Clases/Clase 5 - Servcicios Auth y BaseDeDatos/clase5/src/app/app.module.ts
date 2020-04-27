import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { PublicaComponent } from './paginas/publica/publica.component';
import { PrivadaComponent } from './paginas/privada/privada.component';
import { ErrorComponent } from './paginas/error/error.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './paginas/login/login.component';
import { HttpService } from './services/http/http.service';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicaComponent,
    PrivadaComponent,
    ErrorComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService, 
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
