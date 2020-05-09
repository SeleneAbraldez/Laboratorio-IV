import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { TestPipe } from './pipes/test.pipe';
import { UpperCasePipe } from "@angular/common"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TestPipe,
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
