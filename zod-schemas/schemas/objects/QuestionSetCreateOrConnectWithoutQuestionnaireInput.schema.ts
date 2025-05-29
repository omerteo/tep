import { z } from 'zod';
import { QuestionSetWhereUniqueInputObjectSchema } from './QuestionSetWhereUniqueInput.schema';
import { QuestionSetCreateWithoutQuestionnaireInputObjectSchema } from './QuestionSetCreateWithoutQuestionnaireInput.schema';
import { QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema } from './QuestionSetUncheckedCreateWithoutQuestionnaireInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateOrConnectWithoutQuestionnaireInput> =
  z
    .object({
      where: z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionSetCreateWithoutQuestionnaireInputObjectSchema),
        z.lazy(
          () => QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionSetCreateOrConnectWithoutQuestionnaireInputObjectSchema =
  Schema;
