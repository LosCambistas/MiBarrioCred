import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from "./screens/register/register.component";
import {MenuClientComponent} from "./client_view/menu-client/menu-client.component";
import {BalanceClientComponent} from "./client_view/balance-client/balance-client.component";
import { MatIcon } from '@angular/material/icon';
import {NgOptimizedImage} from "@angular/common";
import {Balance2ClientComponent} from "./client_view/balance2-client/balance2-client.component";
import {TransactionClientComponent} from "./client_view/transaction-client/transaction-client.component";
import {PaymentClientComponent} from "./client_view/payment-client/payment-client.component";
import {
  RegisterPaymentsClientComponent
} from "./client_view/register-payments-client/register-payments-client.component";
import {MenuComponent} from "./screens/menu/menu.component";
import {LoginComponent} from "./screens/login/login.component";
import {MenuBusinessmanComponent} from "./businessman_view/menu-businessman/menu-businessman.component";
import {BalanceBusinessmanComponent} from "./businessman_view/balance-businessman/balance-businessman.component"
import {Balance2BusinessmanComponent} from "./businessman_view/balance2-businessman/balance2-businessman.component";
import {
  RegisterPaymentsBusinessmanComponent
} from "./businessman_view/register-payments-businessman/register-payments-businessman.component";
import {ReportsBusinessmanComponent} from "./businessman_view/reports-businessman/reports-businessman.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MenuClientComponent,
    BalanceClientComponent,
    Balance2ClientComponent,
    TransactionClientComponent,
    PaymentClientComponent,
    RegisterPaymentsClientComponent,
    MenuClientComponent,
    MenuComponent,
    LoginComponent,
    MenuBusinessmanComponent,
    BalanceBusinessmanComponent,
    Balance2BusinessmanComponent,
    RegisterPaymentsBusinessmanComponent,
    ReportsBusinessmanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
