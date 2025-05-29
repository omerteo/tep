import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreAvgAggregateInputType> = z
  .object({
    score: z.literal(true).optional(),
    weight: z.literal(true).optional(),
  })
  .strict();

export const QuestionScoreAvgAggregateInputObjectSchema = Schema;
