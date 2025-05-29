import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    score: z.literal(true).optional(),
    weight: z.literal(true).optional(),
    questionId: z.literal(true).optional(),
    questionSetId: z.literal(true).optional(),
    reviewId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const QuestionScoreCountAggregateInputObjectSchema = Schema;
