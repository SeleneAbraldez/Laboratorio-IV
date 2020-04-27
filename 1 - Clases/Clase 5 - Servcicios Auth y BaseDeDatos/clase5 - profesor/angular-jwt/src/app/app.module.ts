import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PublicaComponent } from './pages/publica/publica.component';
import { PrivadaComponent } from './pages/privada/privada.component';
import { ErrorComponent } from './pages/error/error.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfigService } from './services/config.service';
import { HttpService } from './services/http/http.service';
import { LogoutComponent } from './pages/logout/logout.component';
import { PrivadaAdminComponent } from './pages/privada-admin/privada-admin.component';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicaComponent,
    PrivadaComponent,
    ErrorComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    PrivadaAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    HttpService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
