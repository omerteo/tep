import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireCreateWithoutQuestionSetsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const QuestionnaireCreateWithoutQuestionSetsInputObjectSchema = Schema;
