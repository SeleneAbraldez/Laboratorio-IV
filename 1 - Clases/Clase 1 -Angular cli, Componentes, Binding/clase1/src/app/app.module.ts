import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindeoComponent } from './componentes/bindeo/bindeo.component';
import { SaludoComponent } from './componentes/saludo/saludo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindeoComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
