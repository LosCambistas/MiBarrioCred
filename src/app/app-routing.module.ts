import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./screens/login/login.component";
import {RegisterComponent} from "./screens/register/register.component";
import {MenuComponent} from "./screens/menu/menu.component";
import {MenuClientComponent} from "./client_view/menu-client/menu-client.component";
import {BalanceClientComponent} from "./client_view/balance-client/balance-client.component";
import {Balance2ClientComponent} from "./client_view/balance2-client/balance2-client.component";
import {PaymentClientComponent} from "./client_view/payment-client/payment-client.component";
import {
  RegisterPaymentsClientComponent
} from "./client_view/register-payments-client/register-payments-client.component";
import {TransactionClientComponent} from "./client_view/transaction-client/transaction-client.component";
import {MenuBusinessmanComponent} from "./businessman_view/menu-businessman/menu-businessman.component";
import {BalanceBusinessmanComponent} from "./businessman_view/balance-businessman/balance-businessman.component";
import {Balance2BusinessmanComponent} from "./businessman_view/balance2-businessman/balance2-businessman.component";
import {
  RegisterPaymentsBusinessmanComponent
} from "./businessman_view/register-payments-businessman/register-payments-businessman.component";
import {ReportsBusinessmanComponent} from "./businessman_view/reports-businessman/reports-businessman.component";

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

    /* Client Links*/
  { path: 'client_menu', component: MenuClientComponent},
  { path: 'client_balance', component: BalanceClientComponent},
  { path: 'client_balance2', component: Balance2ClientComponent},
  { path: 'client_payment', component: PaymentClientComponent},
  { path: 'client_register_payment', component: RegisterPaymentsClientComponent},
  { path: 'client_transaction', component: TransactionClientComponent},

  /* BusinessMan Links*/
  { path: 'business_menu', component: MenuBusinessmanComponent},
  { path: 'business_balance', component: BalanceBusinessmanComponent},
  { path: 'business_balance2', component: Balance2BusinessmanComponent},
  { path: 'business_payment', component: RegisterPaymentsBusinessmanComponent},
  { path: 'business_register_payment', component: RegisterPaymentsBusinessmanComponent},
  { path: 'business_report', component: ReportsBusinessmanComponent},
  { path: '**', redirectTo: '/menu' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
