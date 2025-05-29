import { z } from 'zod';
import { QuestionSetCreateNestedManyWithoutQuestionnaireInputObjectSchema } from './QuestionSetCreateNestedManyWithoutQuestionnaireInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    questionSets: z
      .lazy(
        () => QuestionSetCreateNestedManyWithoutQuestionnaireInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionnaireCreateInputObjectSchema = Schema;
