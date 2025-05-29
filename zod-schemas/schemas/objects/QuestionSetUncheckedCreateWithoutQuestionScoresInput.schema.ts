import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUncheckedCreateWithoutQuestionScoresInput> =
  z
    .object({
      id: z.string().optional(),
      title: z.string(),
      description: z.string().optional().nullable(),
      questionnaireId: z.string(),
    })
    .strict();

export const QuestionSetUncheckedCreateWithoutQuestionScoresInputObjectSchema =
  Schema;
