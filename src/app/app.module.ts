import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "../screens/register/register.component";
import {MenuClientComponent} from "../client_view/menu-client/menu-client.component";
import {BalanceClientComponent} from "../client_view/balance-client/balance-client.component";
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from "@angular/common";
import {Balance2ClientComponent} from "../client_view/balance2-client/balance2-client.component";
import {TransactionClientComponent} from "../client_view/transaction-client/transaction-client.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MenuClientComponent,
    BalanceClientComponent,
    Balance2ClientComponent,
    TransactionClientComponent
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
