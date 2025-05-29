import { z } from 'zod';
import { QuestionSetCreateWithoutQuestionnaireInputObjectSchema } from './QuestionSetCreateWithoutQuestionnaireInput.schema';
import { QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema } from './QuestionSetUncheckedCreateWithoutQuestionnaireInput.schema';
import { QuestionSetCreateOrConnectWithoutQuestionnaireInputObjectSchema } from './QuestionSetCreateOrConnectWithoutQuestionnaireInput.schema';
import { QuestionSetUpsertWithWhereUniqueWithoutQuestionnaireInputObjectSchema } from './QuestionSetUpsertWithWhereUniqueWithoutQuestionnaireInput.schema';
import { QuestionSetCreateManyQuestionnaireInputEnvelopeObjectSchema } from './QuestionSetCreateManyQuestionnaireInputEnvelope.schema';
import { QuestionSetWhereUniqueInputObjectSchema } from './QuestionSetWhereUniqueInput.schema';
import { QuestionSetUpdateWithWhereUniqueWithoutQuestionnaireInputObjectSchema } from './QuestionSetUpdateWithWhereUniqueWithoutQuestionnaireInput.schema';
import { QuestionSetUpdateManyWithWhereWithoutQuestionnaireInputObjectSchema } from './QuestionSetUpdateManyWithWhereWithoutQuestionnaireInput.schema';
import { QuestionSetScalarWhereInputObjectSchema } from './QuestionSetScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUncheckedUpdateManyWithoutQuestionnaireNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionSetCreateWithoutQuestionnaireInputObjectSchema),
          z
            .lazy(() => QuestionSetCreateWithoutQuestionnaireInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              QuestionSetCreateOrConnectWithoutQuestionnaireInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionSetCreateOrConnectWithoutQuestionnaireInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              QuestionSetUpsertWithWhereUniqueWithoutQuestionnaireInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionSetUpsertWithWhereUniqueWithoutQuestionnaireInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionSetCreateManyQuestionnaireInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              QuestionSetUpdateWithWhereUniqueWithoutQuestionnaireInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionSetUpdateWithWhereUniqueWithoutQuestionnaireInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              QuestionSetUpdateManyWithWhereWithoutQuestionnaireInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionSetUpdateManyWithWhereWithoutQuestionnaireInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => QuestionSetScalarWhereInputObjectSchema),
          z.lazy(() => QuestionSetScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionSetUncheckedUpdateManyWithoutQuestionnaireNestedInputObjectSchema =
  Schema;
