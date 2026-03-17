import { z } from 'zod';

const IncomeSchema = z.object({
  id: z.number(),
  userId: z.number(),
  accountName: z.string(),
  type: z.string(),
  status: z.string(),
  recurrence: z.string(),
  amount: z.number(),
  date: z.iso.date(),
  receivedAt: z.iso.date().nullable(),
  description: z.string().nullable(),
  createdAt: z.iso.datetime({ precision: null }),
  updatedAt: z.iso.datetime({ precision: null }),
});

const IncomeListSchema = z.array(IncomeSchema);

const PaginatedIncomesSchema = z.object({
  data: z.array(IncomeSchema),
  total: z.number(),
  page: z.number(),
  per_page: z.number(),
});

export { IncomeSchema, IncomeListSchema, PaginatedIncomesSchema };
