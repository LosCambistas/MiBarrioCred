import { Component } from '@angular/core';
import {Usuario} from "../../auth/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-balance-businessman',
  templateUrl: './balance-businessman.component.html',
  styleUrl: './balance-businessman.component.css'
})
export class BalanceBusinessmanComponent {
  merchantBalance: number;
  merchant: Usuario;

  constructor(private router: Router) {
    this.merchant = new Usuario('Jane', 'Doe', 'jane@gmail.com', 'password123', 'businessman');
    this.merchantBalance = 0;
  }

  getBalance(): void {
    this.merchantBalance = this.merchant.balance;
  }

}
