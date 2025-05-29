import { z } from 'zod';
import { QuestionSetCreateWithoutQuestionScoresInputObjectSchema } from './QuestionSetCreateWithoutQuestionScoresInput.schema';
import { QuestionSetUncheckedCreateWithoutQuestionScoresInputObjectSchema } from './QuestionSetUncheckedCreateWithoutQuestionScoresInput.schema';
import { QuestionSetCreateOrConnectWithoutQuestionScoresInputObjectSchema } from './QuestionSetCreateOrConnectWithoutQuestionScoresInput.schema';
import { QuestionSetUpsertWithoutQuestionScoresInputObjectSchema } from './QuestionSetUpsertWithoutQuestionScoresInput.schema';
import { QuestionSetWhereUniqueInputObjectSchema } from './QuestionSetWhereUniqueInput.schema';
import { QuestionSetUpdateWithoutQuestionScoresInputObjectSchema } from './QuestionSetUpdateWithoutQuestionScoresInput.schema';
import { QuestionSetUncheckedUpdateWithoutQuestionScoresInputObjectSchema } from './QuestionSetUncheckedUpdateWithoutQuestionScoresInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUpdateOneRequiredWithoutQuestionScoresNestedInput> =
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
      upsert: z
        .lazy(() => QuestionSetUpsertWithoutQuestionScoresInputObjectSchema)
        .optional(),
      connect: z.lazy(() => QuestionSetWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => QuestionSetUpdateWithoutQuestionScoresInputObjectSchema),
          z.lazy(
            () =>
              QuestionSetUncheckedUpdateWithoutQuestionScoresInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const QuestionSetUpdateOneRequiredWithoutQuestionScoresNestedInputObjectSchema =
  Schema;
