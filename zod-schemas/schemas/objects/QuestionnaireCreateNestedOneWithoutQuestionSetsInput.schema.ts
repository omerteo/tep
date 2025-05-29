import { z } from 'zod';
import { QuestionnaireCreateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireCreateWithoutQuestionSetsInput.schema';
import { QuestionnaireUncheckedCreateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUncheckedCreateWithoutQuestionSetsInput.schema';
import { QuestionnaireCreateOrConnectWithoutQuestionSetsInputObjectSchema } from './QuestionnaireCreateOrConnectWithoutQuestionSetsInput.schema';
import { QuestionnaireWhereUniqueInputObjectSchema } from './QuestionnaireWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireCreateNestedOneWithoutQuestionSetsInput> =
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
      connect: z
        .lazy(() => QuestionnaireWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const QuestionnaireCreateNestedOneWithoutQuestionSetsInputObjectSchema =
  Schema;
