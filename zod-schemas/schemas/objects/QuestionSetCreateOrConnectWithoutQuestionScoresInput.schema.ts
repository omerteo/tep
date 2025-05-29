import { z } from 'zod';
import { QuestionSetWhereUniqueInputObjectSchema } from './QuestionSetWhereUniqueInput.schema';
import { QuestionSetCreateWithoutQuestionScoresInputObjectSchema } from './QuestionSetCreateWithoutQuestionScoresInput.schema';
import { QuestionSetUncheckedCreateWithoutQuestionScoresInputObjectSchema } from './QuestionSetUncheckedCreateWithoutQuestionScoresInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateOrConnectWithoutQuestionScoresInput> =
  z
    .object({
      where: z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionSetCreateWithoutQuestionScoresInputObjectSchema),
        z.lazy(
          () =>
            QuestionSetUncheckedCreateWithoutQuestionScoresInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionSetCreateOrConnectWithoutQuestionScoresInputObjectSchema =
  Schema;
