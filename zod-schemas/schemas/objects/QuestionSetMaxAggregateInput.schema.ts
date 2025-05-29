import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    questionnaireId: z.literal(true).optional(),
  })
  .strict();

export const QuestionSetMaxAggregateInputObjectSchema = Schema;
