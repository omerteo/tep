import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.ReviewSumOrderByAggregateInput> = z
  .object({
    categoryId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReviewSumOrderByAggregateInputObjectSchema = Schema;
