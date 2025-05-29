import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.ReviewCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    reviewers: z.string(),
    categoryId: z.number(),
    revieweeId: z.string(),
    projectId: z.string(),
  })
  .strict();

export const ReviewCreateInputObjectSchema = Schema;
