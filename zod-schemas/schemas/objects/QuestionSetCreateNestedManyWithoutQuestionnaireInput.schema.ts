import { z } from 'zod';
import { QuestionSetCreateWithoutQuestionnaireInputObjectSchema } from './QuestionSetCreateWithoutQuestionnaireInput.schema';
import { QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema } from './QuestionSetUncheckedCreateWithoutQuestionnaireInput.schema';
import { QuestionSetCreateOrConnectWithoutQuestionnaireInputObjectSchema } from './QuestionSetCreateOrConnectWithoutQuestionnaireInput.schema';
import { QuestionSetCreateManyQuestionnaireInputEnvelopeObjectSchema } from './QuestionSetCreateManyQuestionnaireInputEnvelope.schema';
import { QuestionSetWhereUniqueInputObjectSchema } from './QuestionSetWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateNestedManyWithoutQuestionnaireInput> =
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
      createMany: z
        .lazy(() => QuestionSetCreateManyQuestionnaireInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionSetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionSetCreateNestedManyWithoutQuestionnaireInputObjectSchema =
  Schema;
