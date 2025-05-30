import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    text: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    createdBy: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const QuestionCountAggregateInputObjectSchema = Schema;
