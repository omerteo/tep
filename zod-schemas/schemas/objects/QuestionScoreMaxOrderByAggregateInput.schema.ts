import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    questionSetId: z.lazy(() => SortOrderSchema).optional(),
    reviewId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const QuestionScoreMaxOrderByAggregateInputObjectSchema = Schema;
