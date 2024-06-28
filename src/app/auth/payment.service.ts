import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export interface Payment {
  store: string;
  amount: number;
  date: Date;
  paid: boolean;
}

export interface Transaction {
  nombreTienda: string;
  saldo: number;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentsSource = new BehaviorSubject<{ [key: string]: Payment[] }>({});
  payments$ = this.paymentsSource.asObservable();
  private transactionsSource = new BehaviorSubject<Transaction[]>([]);
  transactions$ = this.transactionsSource.asObservable();

  constructor() {}

  getFuturePayments(): { [key: string]: Payment[] } {
    return this.paymentsSource.value;
  }

  getPayments(store: string): Payment[] {
    return this.paymentsSource.value[store] || [];
  }

  getTransactions(): Observable<Transaction[]> {
    return this.transactions$;
  }

  updatePayments(store: string, payments: Payment[]) {
    const currentPayments = { ...this.paymentsSource.value }; // Clonar el objeto
    currentPayments[store] = payments;
    this.paymentsSource.next(currentPayments);
  }

  payInstallment(store: string, amount: number) {
    const currentPayments = { ...this.paymentsSource.value };
    if (currentPayments[store]) {
      const unpaidPayments = currentPayments[store].filter(payment => !payment.paid);
      if (unpaidPayments.length > 0) {
        unpaidPayments[0].paid = true;
        currentPayments[store] = unpaidPayments;
        this.paymentsSource.next(currentPayments);

        // Registrar la transacción
        const transaction: Transaction = {
          nombreTienda: store,
          saldo: amount,
          fecha: new Date().toISOString()
        };
        this.transactionsSource.next([...this.transactionsSource.value, transaction]);

        console.log(`Pago de S/ ${amount.toFixed(2)} realizado al negocio ${store}.`);
      } else {
        console.error(`No hay cuotas pendientes para el negocio ${store}.`);
      }
    } else {
      console.error(`No se encontraron pagos futuros para el negocio ${store}.`);
    }
  }

}
