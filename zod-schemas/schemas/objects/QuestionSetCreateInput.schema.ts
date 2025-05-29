import { z } from 'zod';
import { QuestionnaireCreateNestedOneWithoutQuestionSetsInputObjectSchema } from './QuestionnaireCreateNestedOneWithoutQuestionSetsInput.schema';
import { QuestionScoreCreateNestedManyWithoutQuestionSetInputObjectSchema } from './QuestionScoreCreateNestedManyWithoutQuestionSetInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    questionnaire: z.lazy(
      () => QuestionnaireCreateNestedOneWithoutQuestionSetsInputObjectSchema,
    ),
    questionScores: z
      .lazy(
        () => QuestionScoreCreateNestedManyWithoutQuestionSetInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionSetCreateInputObjectSchema = Schema;
