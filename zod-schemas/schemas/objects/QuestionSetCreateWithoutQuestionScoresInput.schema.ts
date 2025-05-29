import { z } from 'zod';
import { QuestionnaireCreateNestedOneWithoutQuestionSetsInputObjectSchema } from './QuestionnaireCreateNestedOneWithoutQuestionSetsInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateWithoutQuestionScoresInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    questionnaire: z.lazy(
      () => QuestionnaireCreateNestedOneWithoutQuestionSetsInputObjectSchema,
    ),
  })
  .strict();

export const QuestionSetCreateWithoutQuestionScoresInputObjectSchema = Schema;
