export interface Payment {
  business_name: string;
  pay: number;
  credit: number;
  time_limit: string;
  number_share: number;
  type_amortization: string;
  next_payment_date: string; // No opcional
  paid: boolean;
  interest_rate: number; // Tasa de interés por cuota
  amount_per_share?: number; // Monto por cuota
}
