export interface LoanSimulatorInput {
  income: number;
  expenses: number;
  savings: number;
  durationYears: number;
  rate: number;
}

export interface LoanSimulatorOutput {
  maxLoan: number;
  monthlyRepayment: number;
  notaryFees: number;
  totalRepayment: number;
}
