import { z } from 'zod';
import { QuestionSetUncheckedCreateNestedManyWithoutQuestionnaireInputObjectSchema } from './QuestionSetUncheckedCreateNestedManyWithoutQuestionnaireInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    questionSets: z
      .lazy(
        () =>
          QuestionSetUncheckedCreateNestedManyWithoutQuestionnaireInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionnaireUncheckedCreateInputObjectSchema = Schema;
