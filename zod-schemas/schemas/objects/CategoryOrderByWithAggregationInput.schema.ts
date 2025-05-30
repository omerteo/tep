import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CategoryCountOrderByAggregateInputObjectSchema } from './CategoryCountOrderByAggregateInput.schema';
import { CategoryAvgOrderByAggregateInputObjectSchema } from './CategoryAvgOrderByAggregateInput.schema';
import { CategoryMaxOrderByAggregateInputObjectSchema } from './CategoryMaxOrderByAggregateInput.schema';
import { CategoryMinOrderByAggregateInputObjectSchema } from './CategoryMinOrderByAggregateInput.schema';
import { CategorySumOrderByAggregateInputObjectSchema } from './CategorySumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => CategoryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => CategoryAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CategoryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CategoryMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CategorySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CategoryOrderByWithAggregationInputObjectSchema = Schema;
