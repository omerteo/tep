import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuestionnaireOrderByWithRelationInputObjectSchema } from './QuestionnaireOrderByWithRelationInput.schema';
import { QuestionScoreOrderByRelationAggregateInputObjectSchema } from './QuestionScoreOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetOrderByWithRelationInput> = z
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
    questionnaire: z
      .lazy(() => QuestionnaireOrderByWithRelationInputObjectSchema)
      .optional(),
    questionScores: z
      .lazy(() => QuestionScoreOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionSetOrderByWithRelationInputObjectSchema = Schema;
