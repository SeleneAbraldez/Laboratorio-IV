import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './paginas/error/error.component';
import { LoginComponent } from './paginas/login/login.component';
import { SingUpComponent } from './paginas/sing-up/sing-up.component';
import { FavsComponent } from './paginas/favs/favs.component';
import { MajorArcanaComponent } from './paginas/major-arcana/major-arcana.component';
import { MinorArcanaComponent } from './paginas/minor-arcana/minor-arcana.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllComponent } from './paginas/all/all.component';
import { RandomComponent } from './paginas/random/random.component';
import { DetailComponent } from './paginas/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitulosPipe } from './pipes/titulos.pipe';
import { UserComponent } from './paginas/user/user.component';
import { CartasComponent } from './componentes/cartas/cartas.component';
import { SearchComponent } from './paginas/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    SingUpComponent,
    FavsComponent,
    MajorArcanaComponent,
    MinorArcanaComponent,
    MenuComponent,
    AllComponent,
    RandomComponent,
    DetailComponent,
    TitulosPipe,
    UserComponent,
    CartasComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
  ],
  providers: [
    // AngularFireAuth,
    TitulosPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
