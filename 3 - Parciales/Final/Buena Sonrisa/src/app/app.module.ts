import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { RecaptchaModule } from 'ng-recaptcha';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { UsuarixComponent } from './paginas/usuarix/usuarix.component';
import { ProfesionalComponent } from './paginas/profesional/profesional.component';
import { ErrorComponent } from './paginas/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './paginas/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SacarTurnoComponent } from './componentes/sacar-turno/sacar-turno.component';
import { VerTurnosComponent } from './componentes/ver-turnos/ver-turnos.component';
import { TurnosPasadosComponent } from './componentes/turnos-pasados/turnos-pasados.component';
import { VerTurnosEspecialistaComponent } from './componentes/ver-turnos-especialista/ver-turnos-especialista.component';
import { VerTurnosRecepcionistaComponent } from './componentes/ver-turnos-recepcionista/ver-turnos-recepcionista.component';
import { DescargasComponent } from './componentes/descargas/descargas.component';
import { SacarTurnoRecepcionistaComponent } from './componentes/sacar-turno-recepcionista/sacar-turno-recepcionista.component';
import { ConsultoriosComponent } from './componentes/consultorios/consultorios.component';
import { EntrevistaComponent } from './componentes/entrevista/entrevista.component';
import { HechoPipe } from './pipes/hecho.pipe';
import { LibrePipe } from './pipes/libre.pipe';
import { EnviadoPipe } from './pipes/enviado.pipe';
import { VerSesionesComponent } from './componentes/ver-sesiones/ver-sesiones.component';
import { RegistrarAdminComponent } from './componentes/registrar-admin/registrar-admin.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsuarixComponent,
    ProfesionalComponent,
    ErrorComponent,
    HomeComponent,
    NavbarComponent,
    SacarTurnoComponent,
    VerTurnosComponent,
    TurnosPasadosComponent,
    VerTurnosEspecialistaComponent,
    VerTurnosRecepcionistaComponent,
    DescargasComponent,
    SacarTurnoRecepcionistaComponent,
    ConsultoriosComponent,
    EntrevistaComponent,
    HechoPipe,
    LibrePipe,
    EnviadoPipe,
    VerSesionesComponent,
    RegistrarAdminComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    RecaptchaModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
