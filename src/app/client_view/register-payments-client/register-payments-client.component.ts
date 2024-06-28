import { Component } from '@angular/core';
import {PaymentService} from "../../auth/payment.service";
import {Router} from "@angular/router";

interface Payment {
  store: string;
  amount: number;
  date: Date;
  paid: boolean;
}

@Component({
  selector: 'app-register-payments-client',
  templateUrl: './register-payments-client.component.html',
  styleUrl: './register-payments-client.component.css'
})
export class RegisterPaymentsClientComponent {
  payment = {
    business_name: '',
    pay: 0,
    credit: 0,
    time_limit: '',
    number_share: 0,
    type_amortization: ''
  };

  constructor(private paymentService: PaymentService, private router: Router) {}

  onSubmit() {
    const { business_name, pay, credit, time_limit, number_share, type_amortization } = this.payment;

    let payments: Payment[] = [];
    const interestRate = credit / 100;

    switch (type_amortization) {
      case 'frances':
        payments = this.calculateFrenchAmortization(business_name, pay, interestRate, number_share, time_limit);
        break;
      case 'aleman':
        payments = this.calculateGermanAmortization(business_name, pay, interestRate, number_share, time_limit);
        break;
      case 'peruano':
        // Implementa tu lógica para el sistema peruano
        break;
    }

    this.paymentService.updatePayments(business_name, payments);
    this.router.navigate(['/client_menu']);
  }

  calculateFrenchAmortization(store: string, principal: number, annualInterestRate: number, numberOfPayments: number, paymentPeriod: string): Payment[] {
    const monthlyInterestRate = annualInterestRate / 12;
    const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const payments: Payment[] = [];

    for (let i = 0; i < numberOfPayments; i++) {
      payments.push({
        store: store,
        amount: monthlyPayment,
        date: this.calculatePaymentDate(i, paymentPeriod),
        paid: false // Asegúrate de inicializar todas las propiedades de Payment
      });
    }

    return payments;
  }

  calculateGermanAmortization(store: string, principal: number, annualInterestRate: number, numberOfPayments: number, paymentPeriod: string): Payment[] {
    const monthlyInterestRate = annualInterestRate / 12;
    const payments: Payment[] = [];
    const monthlyPrincipalRepayment = principal / numberOfPayments;

    for (let i = 0; i < numberOfPayments; i++) {
      const remainingPrincipal = principal - (monthlyPrincipalRepayment * i);
      const interestPayment = remainingPrincipal * monthlyInterestRate;
      payments.push({
        store: store,
        amount: monthlyPrincipalRepayment + interestPayment,
        date: this.calculatePaymentDate(i, paymentPeriod),
        paid: false // Asegúrate de inicializar todas las propiedades de Payment
      });
    }

    return payments;
  }

  calculatePaymentDate(installmentNumber: number, paymentPeriod: string): Date {
    const date = new Date();
    switch (paymentPeriod) {
      case 'mensual':
        date.setMonth(date.getMonth() + installmentNumber);
        break;
      case 'trimestral':
        date.setMonth(date.getMonth() + (installmentNumber * 3));
        break;
      case 'anual':
        date.setFullYear(date.getFullYear() + installmentNumber);
        break;
    }
    return date;
  }
}
