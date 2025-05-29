import { z } from 'zod';
import { QuestionSetCreateWithoutQuestionScoresInputObjectSchema } from './QuestionSetCreateWithoutQuestionScoresInput.schema';
import { QuestionSetUncheckedCreateWithoutQuestionScoresInputObjectSchema } from './QuestionSetUncheckedCreateWithoutQuestionScoresInput.schema';
import { QuestionSetCreateOrConnectWithoutQuestionScoresInputObjectSchema } from './QuestionSetCreateOrConnectWithoutQuestionScoresInput.schema';
import { QuestionSetWhereUniqueInputObjectSchema } from './QuestionSetWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateNestedOneWithoutQuestionScoresInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionSetCreateWithoutQuestionScoresInputObjectSchema),
          z.lazy(
            () =>
              QuestionSetUncheckedCreateWithoutQuestionScoresInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            QuestionSetCreateOrConnectWithoutQuestionScoresInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => QuestionSetWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const QuestionSetCreateNestedOneWithoutQuestionScoresInputObjectSchema =
  Schema;
