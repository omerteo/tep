import { z } from 'zod';
import { QuestionSetCreateNestedOneWithoutQuestionScoresInputObjectSchema } from './QuestionSetCreateNestedOneWithoutQuestionScoresInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreCreateInput> = z
  .object({
    id: z.string().optional(),
    score: z.number(),
    weight: z.number(),
    questionId: z.string(),
    reviewId: z.string(),
    questionSet: z.lazy(
      () => QuestionSetCreateNestedOneWithoutQuestionScoresInputObjectSchema,
    ),
  })
  .strict();

export const QuestionScoreCreateInputObjectSchema = Schema;
