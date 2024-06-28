import { Component } from '@angular/core';
import {Usuario} from "../../auth/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-balance2-businessman',
  templateUrl: './balance2-businessman.component.html',
  styleUrl: './balance2-businessman.component.css'
})
export class Balance2BusinessmanComponent {
  merchant: Usuario;
  merchantAmount: number;
  merchantCCI: string;

  constructor(private route: Router) {
    this.merchant = new Usuario('Jane', 'Doe', 'jane@gmail.com', 'password123', 'businessman');
    this.merchantAmount = 0;
    this.merchantCCI = '';
  }

  setCCI(cci: string) {
    this.merchantCCI = cci;
  }

  depositAmount() {
    if (this.merchantCCI && this.merchantAmount > 0) {
      if (this.merchantAmount <= this.merchant.balance) {
        console.log('Se depositó el monto correctamente');
        this.merchant.balance -= this.merchantAmount;

        this.merchantAmount = 0;
        this.merchantCCI = '';
      } else {
        console.error('El monto es mayor al saldo disponible');
      }
    } else {
      console.error('Debe completar los campos correctamente');
    }
  }

}
