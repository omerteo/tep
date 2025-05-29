import { z } from 'zod';
import { QuestionnaireCreateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireCreateWithoutQuestionSetsInput.schema';
import { QuestionnaireUncheckedCreateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUncheckedCreateWithoutQuestionSetsInput.schema';
import { QuestionnaireCreateOrConnectWithoutQuestionSetsInputObjectSchema } from './QuestionnaireCreateOrConnectWithoutQuestionSetsInput.schema';
import { QuestionnaireUpsertWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUpsertWithoutQuestionSetsInput.schema';
import { QuestionnaireWhereUniqueInputObjectSchema } from './QuestionnaireWhereUniqueInput.schema';
import { QuestionnaireUpdateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUpdateWithoutQuestionSetsInput.schema';
import { QuestionnaireUncheckedUpdateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUncheckedUpdateWithoutQuestionSetsInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireUpdateOneRequiredWithoutQuestionSetsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionnaireCreateWithoutQuestionSetsInputObjectSchema),
          z.lazy(
            () =>
              QuestionnaireUncheckedCreateWithoutQuestionSetsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            QuestionnaireCreateOrConnectWithoutQuestionSetsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => QuestionnaireUpsertWithoutQuestionSetsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => QuestionnaireWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => QuestionnaireUpdateWithoutQuestionSetsInputObjectSchema),
          z.lazy(
            () =>
              QuestionnaireUncheckedUpdateWithoutQuestionSetsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const QuestionnaireUpdateOneRequiredWithoutQuestionSetsNestedInputObjectSchema =
  Schema;
