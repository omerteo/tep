import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuestionSetCountOrderByAggregateInputObjectSchema } from './QuestionSetCountOrderByAggregateInput.schema';
import { QuestionSetMaxOrderByAggregateInputObjectSchema } from './QuestionSetMaxOrderByAggregateInput.schema';
import { QuestionSetMinOrderByAggregateInputObjectSchema } from './QuestionSetMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    questionnaireId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => QuestionSetCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => QuestionSetMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => QuestionSetMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionSetOrderByWithAggregationInputObjectSchema = Schema;
