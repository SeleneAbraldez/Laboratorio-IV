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
// import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfigService } from './services/config.service';
import { HttpService } from './services/http/http.service';
import { LogoutComponent } from './pages/logout/logout.component';
import { PrivadaAdminComponent } from './pages/privada-admin/privada-admin.component';
import { CreateComponent } from './pages/create/create.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComponentsModule } from "./components/components.module";
import { DataService } from './services/data.service';
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
    // MenuComponent,
    LoginComponent,
    LogoutComponent,
    PrivadaAdminComponent,
    CreateComponent
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
    }),
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    AngularFirestoreModule,
    ComponentsModule
  ],
  providers: [
    HttpService,
    ConfigService,
    // AngularFireAuth
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
