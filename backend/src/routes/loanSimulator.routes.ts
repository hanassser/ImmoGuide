import { Router } from "express";
import { loanSimulatorController } from "../controllers/loanSimulator.controller";

const router = Router();

/**
 * @openapi
 * /simulate-loan:
 *   post:
 *     summary: Simulate loan eligibility
 *     tags:
 *       - Loan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               income:
 *                 type: number
 *                 example: 3000
 *               expenses:
 *                 type: number
 *                 example: 1000
 *               savings:
 *                 type: number
 *                 example: 20000
 *               durationYears:
 *                 type: number
 *                 example: 25
 *               rate:
 *                 type: number
 *                 example: 0.03
 *     responses:
 *       200:
 *         description: Loan simulation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 maxLoan:
 *                   type: number
 *                 monthlyRepayment:
 *                   type: number
 *                 notaryFees:
 *                   type: number
 *                 totalRepayment:
 *                   type: number
 */
router.post("/simulate-loan", loanSimulatorController);

export default router;
