import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "../screens/register/register.component";
import {MenuClientComponent} from "../client_view/menu-client/menu-client.component";
import {BalanceClientComponent} from "../client_view/balance-client/balance-client.component";
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MenuClientComponent,
    BalanceClientComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIcon,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
