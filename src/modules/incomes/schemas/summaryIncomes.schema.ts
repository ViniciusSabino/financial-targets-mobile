import { z } from 'zod';

const summaryPerType = z.object({
  type: z.string(),
  amount: z.number(),
  dateOfNextIncome: z.iso.date().nullable(),
});

const IncomesSummarySchema = z.object({
  totalExpected: z.number(),
  totalReceived: z.number(),
  summariesPerType: z.array(summaryPerType),
});

export { IncomesSummarySchema, summaryPerType };
