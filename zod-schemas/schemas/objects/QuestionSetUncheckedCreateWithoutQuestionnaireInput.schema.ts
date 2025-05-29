import { z } from 'zod';
import { QuestionScoreUncheckedCreateNestedManyWithoutQuestionSetInputObjectSchema } from './QuestionScoreUncheckedCreateNestedManyWithoutQuestionSetInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUncheckedCreateWithoutQuestionnaireInput> =
  z
    .object({
      id: z.string().optional(),
      title: z.string(),
      description: z.string().optional().nullable(),
      questionScores: z
        .lazy(
          () =>
            QuestionScoreUncheckedCreateNestedManyWithoutQuestionSetInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema =
  Schema;
