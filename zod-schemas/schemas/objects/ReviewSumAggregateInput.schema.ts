import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.ReviewSumAggregateInputType> = z
  .object({
    categoryId: z.literal(true).optional(),
  })
  .strict();

export const ReviewSumAggregateInputObjectSchema = Schema;
