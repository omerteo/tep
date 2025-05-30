import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateManyQuestionnaireInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
  })
  .strict();

export const QuestionSetCreateManyQuestionnaireInputObjectSchema = Schema;
