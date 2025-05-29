import { z } from 'zod';
import { QuestionScoreCreateWithoutQuestionSetInputObjectSchema } from './QuestionScoreCreateWithoutQuestionSetInput.schema';
import { QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema } from './QuestionScoreUncheckedCreateWithoutQuestionSetInput.schema';
import { QuestionScoreCreateOrConnectWithoutQuestionSetInputObjectSchema } from './QuestionScoreCreateOrConnectWithoutQuestionSetInput.schema';
import { QuestionScoreUpsertWithWhereUniqueWithoutQuestionSetInputObjectSchema } from './QuestionScoreUpsertWithWhereUniqueWithoutQuestionSetInput.schema';
import { QuestionScoreCreateManyQuestionSetInputEnvelopeObjectSchema } from './QuestionScoreCreateManyQuestionSetInputEnvelope.schema';
import { QuestionScoreWhereUniqueInputObjectSchema } from './QuestionScoreWhereUniqueInput.schema';
import { QuestionScoreUpdateWithWhereUniqueWithoutQuestionSetInputObjectSchema } from './QuestionScoreUpdateWithWhereUniqueWithoutQuestionSetInput.schema';
import { QuestionScoreUpdateManyWithWhereWithoutQuestionSetInputObjectSchema } from './QuestionScoreUpdateManyWithWhereWithoutQuestionSetInput.schema';
import { QuestionScoreScalarWhereInputObjectSchema } from './QuestionScoreScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreUpdateManyWithoutQuestionSetNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionScoreCreateWithoutQuestionSetInputObjectSchema),
          z
            .lazy(() => QuestionScoreCreateWithoutQuestionSetInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              QuestionScoreCreateOrConnectWithoutQuestionSetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionScoreCreateOrConnectWithoutQuestionSetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              QuestionScoreUpsertWithWhereUniqueWithoutQuestionSetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionScoreUpsertWithWhereUniqueWithoutQuestionSetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionScoreCreateManyQuestionSetInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              QuestionScoreUpdateWithWhereUniqueWithoutQuestionSetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionScoreUpdateWithWhereUniqueWithoutQuestionSetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              QuestionScoreUpdateManyWithWhereWithoutQuestionSetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionScoreUpdateManyWithWhereWithoutQuestionSetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => QuestionScoreScalarWhereInputObjectSchema),
          z.lazy(() => QuestionScoreScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionScoreUpdateManyWithoutQuestionSetNestedInputObjectSchema =
  Schema;
