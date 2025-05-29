import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreSumAggregateInputType> = z
  .object({
    score: z.literal(true).optional(),
    weight: z.literal(true).optional(),
  })
  .strict();

export const QuestionScoreSumAggregateInputObjectSchema = Schema;
