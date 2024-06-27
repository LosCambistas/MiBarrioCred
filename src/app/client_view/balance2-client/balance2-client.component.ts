import { Component } from '@angular/core';
import {Usuario} from "../../auth/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-balance2-client',
  templateUrl: './balance2-client.component.html',
  styleUrl: './balance2-client.component.css'
})
export class Balance2ClientComponent {
  userBalance: number = 0;
  selectedPayment: string = '';
  cardType: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  securityNumber: string = '';

  constructor(private router: Router) {

  }


  pagar(): void {
    if (this.selectedPayment === '') {
      alert('Por favor, selecciona un pago a negocio antes de continuar.');
    } else {
      // Lógica para proceder con el pago
      console.log(`Pago a negocio seleccionado: ${this.selectedPayment}`);
      // Aquí podrías agregar lógica adicional para procesar el pago
    }
  }

  confirmarPago(): void {
    if (this.cardType === '' || this.cardNumber === '' || this.expiryDate === '' || this.securityNumber === '') {
      alert('Por favor, completa todos los campos de la tarjeta antes de continuar.');
      return;
    }

    // Validar que el número de tarjeta tenga 16 dígitos
    if (!/^\d{16}$/.test(this.cardNumber)) {
      alert('El número de tarjeta debe tener 16 dígitos.');
      return;
    }

    // Validar que el número de seguridad tenga 3 dígitos
    if (!/^\d{3}$/.test(this.securityNumber)) {
      alert('El número de seguridad debe tener 3 dígitos.');
      return;
    }

    // Lógica para proceder a la página de confirmación de pago
    console.log('Información de tarjeta válida');
    this.router.navigate(['/client_menu']); // Ajusta la ruta según sea necesario
  }
}


