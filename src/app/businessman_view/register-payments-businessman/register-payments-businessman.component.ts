import { Component } from '@angular/core';
import {Usuario} from "../../auth/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-payments-businessman',
  templateUrl: './register-payments-businessman.component.html',
  styleUrl: './register-payments-businessman.component.css'
})
export class RegisterPaymentsBusinessmanComponent {
  merchant: Usuario;
  methodType: string;

  constructor(private router: Router) {
    this.merchant = new Usuario('Sergio', 'Perez', 'serPe@gmail.com', '123456', 'merchant');
    this.methodType = 'french';
  }

  chooseMethod() {
    console.log('Usuario registrado con el método de amortización:', this.methodType);
    this.router.navigate(['/client-screen']);
  }
}
