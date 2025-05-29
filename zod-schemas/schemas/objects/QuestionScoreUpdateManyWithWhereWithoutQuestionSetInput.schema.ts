import { z } from 'zod';
import { QuestionScoreScalarWhereInputObjectSchema } from './QuestionScoreScalarWhereInput.schema';
import { QuestionScoreUpdateManyMutationInputObjectSchema } from './QuestionScoreUpdateManyMutationInput.schema';
import { QuestionScoreUncheckedUpdateManyWithoutQuestionScoresInputObjectSchema } from './QuestionScoreUncheckedUpdateManyWithoutQuestionScoresInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreUpdateManyWithWhereWithoutQuestionSetInput> =
  z
    .object({
      where: z.lazy(() => QuestionScoreScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionScoreUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            QuestionScoreUncheckedUpdateManyWithoutQuestionScoresInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionScoreUpdateManyWithWhereWithoutQuestionSetInputObjectSchema =
  Schema;
