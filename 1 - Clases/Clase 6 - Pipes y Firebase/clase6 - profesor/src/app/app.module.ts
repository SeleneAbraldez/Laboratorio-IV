import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TestPipe } from './pipes/test.pipe';
import { UpperCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    RoutingRoutingModule
  ],
  providers: [
    TestPipe,
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
