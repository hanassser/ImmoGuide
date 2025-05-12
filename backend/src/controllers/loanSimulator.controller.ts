import { Request, Response, RequestHandler } from "express";
import {
  LoanSimulatorInput,
  LoanSimulatorOutput,
} from "../interfaces/loanSimulator.interface";
import { loanSimulatorService } from "../services/loanSimulator.service";

export const loanSimulatorController: RequestHandler = (
  req: Request,
  res: Response
) => {
  try {
    const input: LoanSimulatorInput = req.body;
    const result: LoanSimulatorOutput = loanSimulatorService(input);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
