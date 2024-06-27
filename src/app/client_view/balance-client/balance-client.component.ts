import { Component } from '@angular/core';
import {Usuario} from "../../auth/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-balance-client',
  templateUrl: './balance-client.component.html',
  styleUrl: './balance-client.component.css'
})
export class BalanceClientComponent {
  userBalance: number = 0;
  selectedPayment: string = '';
  usuario: Usuario;

  constructor(private router: Router) {
    // Suponiendo que los datos del usuario vienen de algún servicio o almacenamiento local
    this.usuario = new Usuario('John', 'Doe', 'john.doe@example.com', 'password123', 'user');
    this.usuario.balance = 50000; // Asigna un saldo inicial para el ejemplo
  }

  verSaldo(): void {
    this.userBalance = this.usuario.balance;
  }

  pagar(): void {
    if (this.selectedPayment === '') {
      alert('Por favor, selecciona un pago a negocio antes de continuar.');
    } else {
      // Lógica para proceder con el pago
      console.log(`Pago a negocio seleccionado: ${this.selectedPayment}`);
      this.router.navigate(['/client_balance2']);
      // Aquí podrías agregar lógica adicional para procesar el pago
    }
  }
}
