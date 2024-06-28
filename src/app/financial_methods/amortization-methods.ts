export class AmortizationMethods {
  static frenchMethod(totalAmountLoan: number, anualRate: number, periods: number): number[] {
    const monthlyRate = anualRate / 12 / 100;
    const annuity = totalAmountLoan * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -periods)));
    let balance = totalAmountLoan;
    const amortizations = [];

    for (let i = 0; i < periods; i++) {
      const interest = balance * monthlyRate;
      const loanPayment = annuity - interest;
      balance -= loanPayment;
      amortizations.push(annuity);
    }

    return amortizations;
  }

  static germanAmortization(totalAmountLoan: number, anualRate: number, periods: number): number[] {
    const monthlyRate = anualRate / 12 / 100;
    const loanPayment = totalAmountLoan / periods;
    let balance = totalAmountLoan;
    const amortizations = [];

    for (let i = 0; i < periods; i++) {
      const interest = balance * monthlyRate;
      const totalAmortization = loanPayment + interest;
      balance -= loanPayment;
      amortizations.push(totalAmortization);
    }

    return amortizations;
  }

  static peruvianAmortization(totalAmountLoan: number, anualRate: number, periods: number): number[] {
    const monthlyRate = anualRate / 12 / 100;
    const amortizations = [];

    for (let i = 0; i < periods; i++) {
      const amortization = (totalAmountLoan / periods) + (totalAmountLoan * monthlyRate);
      amortizations.push(amortization);
    }

    return amortizations;
  }
}
