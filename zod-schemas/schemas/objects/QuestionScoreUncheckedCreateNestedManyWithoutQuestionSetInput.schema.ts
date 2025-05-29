import { z } from 'zod';
import { QuestionScoreCreateWithoutQuestionSetInputObjectSchema } from './QuestionScoreCreateWithoutQuestionSetInput.schema';
import { QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema } from './QuestionScoreUncheckedCreateWithoutQuestionSetInput.schema';
import { QuestionScoreCreateOrConnectWithoutQuestionSetInputObjectSchema } from './QuestionScoreCreateOrConnectWithoutQuestionSetInput.schema';
import { QuestionScoreCreateManyQuestionSetInputEnvelopeObjectSchema } from './QuestionScoreCreateManyQuestionSetInputEnvelope.schema';
import { QuestionScoreWhereUniqueInputObjectSchema } from './QuestionScoreWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreUncheckedCreateNestedManyWithoutQuestionSetInput> =
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
      createMany: z
        .lazy(() => QuestionScoreCreateManyQuestionSetInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionScoreUncheckedCreateNestedManyWithoutQuestionSetInputObjectSchema =
  Schema;
