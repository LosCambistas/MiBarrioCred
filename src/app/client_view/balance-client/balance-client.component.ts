import {Component} from '@angular/core';
import {PaymentService} from "../../auth/payment.service";

@Component({
  selector: 'app-balance-client',
  templateUrl: './balance-client.component.html',
  styleUrl: './balance-client.component.css'
})
export class BalanceClientComponent{

  balanceAmount: number = 0;
  selectedBusiness: string = '';

  constructor(private paymentService: PaymentService) {}

  payInstallment() {
    if (!this.selectedBusiness || isNaN(this.balanceAmount) || this.balanceAmount <= 0) {
      alert('Por favor completa todos los campos con valores válidos.');
      return;
    }

    // Llamar al servicio para pagar una cuota
    this.paymentService.payInstallment(this.selectedBusiness, this.balanceAmount);

    alert(`Pago de S/ ${this.balanceAmount.toFixed(2)} realizado al negocio ${this.selectedBusiness}.`);

    // Limpiar los campos después del pago (opcional)
    this.selectedBusiness = '';
    this.balanceAmount = 0;
  }
}
