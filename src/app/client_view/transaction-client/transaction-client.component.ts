import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../auth/transaction.service";
import {PaymentService} from "../../auth/payment.service";

interface Transaction {
  nombreTienda: string;
  saldo: number;
  fecha: string;
}

@Component({
  selector: 'app-transaction-client',
  templateUrl: './transaction-client.component.html',
  styleUrl: './transaction-client.component.css'
})
export class TransactionClientComponent implements OnInit{
  transactions: Transaction[] = [];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }
}
