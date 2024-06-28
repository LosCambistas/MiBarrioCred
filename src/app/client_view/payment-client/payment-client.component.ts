import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../auth/payment.service";
import {map, Observable, of} from "rxjs";

interface Payment {
  store: string;
  amount: number;
  date: Date;
}

@Component({
  selector: 'app-payment-client',
  templateUrl: './payment-client.component.html',
  styleUrl: './payment-client.component.css'
})

export class PaymentClientComponent implements OnInit {
  stores: string[] = [];
  selectedStore: string = '';
  futurePayments$: Observable<Payment[]> = of([]); // Observable para los pagos futuros

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    // Suscribirse al observable payments$ para obtener los pagos
    this.paymentService.payments$.subscribe(payments => {
      this.stores = Object.keys(payments);
      if (this.selectedStore) {
        this.futurePayments$ = this.paymentService.payments$.pipe(
            map(payments => payments[this.selectedStore] || [])
        );
      }
    });
  }

  onStoreChange(event: Event) {
    const store = (event.target as HTMLSelectElement).value;
    this.selectedStore = store;
    this.futurePayments$ = this.paymentService.payments$.pipe(
        map(payments => payments[store] || [])
    );
  }
}
