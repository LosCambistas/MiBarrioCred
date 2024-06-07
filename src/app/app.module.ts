import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "../screens/register/register.component";
import {MenuClientComponent} from "../client_view/menu-client/menu-client.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MenuClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
