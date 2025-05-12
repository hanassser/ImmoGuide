import {
  LoanSimulatorInput,
  LoanSimulatorOutput,
} from "../interfaces/loanSimulator.interface";

export const loanSimulatorService = (
  input: LoanSimulatorInput
): LoanSimulatorOutput => {
  const { income, expenses, savings, durationYears, rate } = input;
  const maxMonthlyPayment = income * 0.33;
  const totalMonths = durationYears * 12;
  const r = rate / 12;
  const maxLoan =
    maxMonthlyPayment *
    ((Math.pow(1 + r, totalMonths) - 1) / (r * Math.pow(1 + r, totalMonths)));
  const monthlyRepayment = calculateMonthlyRepayment(
    maxLoan,
    durationYears,
    rate
  );
  const notaryFees = 0.08 * (maxLoan + savings);
  const totalRepayment = monthlyRepayment * totalMonths + notaryFees;

  return {
    maxLoan: Math.round(maxLoan),
    monthlyRepayment: Math.round(monthlyRepayment),
    notaryFees: Math.round(notaryFees),
    totalRepayment: Math.round(totalRepayment),
  };
};

const calculateMonthlyRepayment = (
  maxLoan: number,
  durationYears: number,
  annualRate: number
): number => {
  const totalMonths = durationYears * 12;
  const monthlyRate = annualRate / 12;
  return (
    (maxLoan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
};
