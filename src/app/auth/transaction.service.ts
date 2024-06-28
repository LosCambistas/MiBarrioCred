import { Injectable } from '@angular/core';

interface Transaction {
  nombreTienda: string;
  saldo: number;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }
}
