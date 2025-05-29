import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreUncheckedCreateWithoutQuestionSetInput> =
  z
    .object({
      id: z.string().optional(),
      score: z.number(),
      weight: z.number(),
      questionId: z.string(),
      reviewId: z.string(),
    })
    .strict();

export const QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema =
  Schema;
