import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuestionnaireCountOrderByAggregateInputObjectSchema } from './QuestionnaireCountOrderByAggregateInput.schema';
import { QuestionnaireMaxOrderByAggregateInputObjectSchema } from './QuestionnaireMaxOrderByAggregateInput.schema';
import { QuestionnaireMinOrderByAggregateInputObjectSchema } from './QuestionnaireMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => QuestionnaireCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => QuestionnaireMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => QuestionnaireMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionnaireOrderByWithAggregationInputObjectSchema = Schema;
