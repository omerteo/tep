import { z } from 'zod';
import { QuestionScoreCreateNestedManyWithoutQuestionSetInputObjectSchema } from './QuestionScoreCreateNestedManyWithoutQuestionSetInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateWithoutQuestionnaireInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    questionScores: z
      .lazy(
        () => QuestionScoreCreateNestedManyWithoutQuestionSetInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionSetCreateWithoutQuestionnaireInputObjectSchema = Schema;
