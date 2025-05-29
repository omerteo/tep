import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.ReviewMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    reviewers: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    revieweeId: z.literal(true).optional(),
    projectId: z.literal(true).optional(),
  })
  .strict();

export const ReviewMinAggregateInputObjectSchema = Schema;
