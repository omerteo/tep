import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuestionSetOrderByRelationAggregateInputObjectSchema } from './QuestionSetOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireOrderByWithRelationInput> = z
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
    questionSets: z
      .lazy(() => QuestionSetOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionnaireOrderByWithRelationInputObjectSchema = Schema;
