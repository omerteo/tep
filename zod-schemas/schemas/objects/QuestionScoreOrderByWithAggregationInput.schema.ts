import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionScoreCountOrderByAggregateInputObjectSchema } from './QuestionScoreCountOrderByAggregateInput.schema';
import { QuestionScoreAvgOrderByAggregateInputObjectSchema } from './QuestionScoreAvgOrderByAggregateInput.schema';
import { QuestionScoreMaxOrderByAggregateInputObjectSchema } from './QuestionScoreMaxOrderByAggregateInput.schema';
import { QuestionScoreMinOrderByAggregateInputObjectSchema } from './QuestionScoreMinOrderByAggregateInput.schema';
import { QuestionScoreSumOrderByAggregateInputObjectSchema } from './QuestionScoreSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    questionSetId: z.lazy(() => SortOrderSchema).optional(),
    reviewId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => QuestionScoreCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => QuestionScoreAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => QuestionScoreMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => QuestionScoreMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => QuestionScoreSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionScoreOrderByWithAggregationInputObjectSchema = Schema;
