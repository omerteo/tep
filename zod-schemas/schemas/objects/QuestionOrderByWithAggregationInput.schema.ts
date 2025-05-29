import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionCountOrderByAggregateInputObjectSchema } from './QuestionCountOrderByAggregateInput.schema';
import { QuestionMaxOrderByAggregateInputObjectSchema } from './QuestionMaxOrderByAggregateInput.schema';
import { QuestionMinOrderByAggregateInputObjectSchema } from './QuestionMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    createdBy: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => QuestionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => QuestionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => QuestionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const QuestionOrderByWithAggregationInputObjectSchema = Schema;
