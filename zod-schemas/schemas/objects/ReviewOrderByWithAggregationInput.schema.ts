import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReviewCountOrderByAggregateInputObjectSchema } from './ReviewCountOrderByAggregateInput.schema';
import { ReviewAvgOrderByAggregateInputObjectSchema } from './ReviewAvgOrderByAggregateInput.schema';
import { ReviewMaxOrderByAggregateInputObjectSchema } from './ReviewMaxOrderByAggregateInput.schema';
import { ReviewMinOrderByAggregateInputObjectSchema } from './ReviewMinOrderByAggregateInput.schema';
import { ReviewSumOrderByAggregateInputObjectSchema } from './ReviewSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    reviewers: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    revieweeId: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReviewCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ReviewAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ReviewMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReviewMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ReviewSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ReviewOrderByWithAggregationInputObjectSchema = Schema;
