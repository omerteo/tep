import { z } from 'zod';
import { QuestionSetWhereUniqueInputObjectSchema } from './QuestionSetWhereUniqueInput.schema';
import { QuestionSetUpdateWithoutQuestionnaireInputObjectSchema } from './QuestionSetUpdateWithoutQuestionnaireInput.schema';
import { QuestionSetUncheckedUpdateWithoutQuestionnaireInputObjectSchema } from './QuestionSetUncheckedUpdateWithoutQuestionnaireInput.schema';
import { QuestionSetCreateWithoutQuestionnaireInputObjectSchema } from './QuestionSetCreateWithoutQuestionnaireInput.schema';
import { QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema } from './QuestionSetUncheckedCreateWithoutQuestionnaireInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUpsertWithWhereUniqueWithoutQuestionnaireInput> =
  z
    .object({
      where: z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => QuestionSetUpdateWithoutQuestionnaireInputObjectSchema),
        z.lazy(
          () => QuestionSetUncheckedUpdateWithoutQuestionnaireInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => QuestionSetCreateWithoutQuestionnaireInputObjectSchema),
        z.lazy(
          () => QuestionSetUncheckedCreateWithoutQuestionnaireInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionSetUpsertWithWhereUniqueWithoutQuestionnaireInputObjectSchema =
  Schema;
