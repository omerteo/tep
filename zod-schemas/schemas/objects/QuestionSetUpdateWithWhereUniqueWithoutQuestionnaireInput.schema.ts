import { z } from 'zod';
import { QuestionSetWhereUniqueInputObjectSchema } from './QuestionSetWhereUniqueInput.schema';
import { QuestionSetUpdateWithoutQuestionnaireInputObjectSchema } from './QuestionSetUpdateWithoutQuestionnaireInput.schema';
import { QuestionSetUncheckedUpdateWithoutQuestionnaireInputObjectSchema } from './QuestionSetUncheckedUpdateWithoutQuestionnaireInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUpdateWithWhereUniqueWithoutQuestionnaireInput> =
  z
    .object({
      where: z.lazy(() => QuestionSetWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionSetUpdateWithoutQuestionnaireInputObjectSchema),
        z.lazy(
          () => QuestionSetUncheckedUpdateWithoutQuestionnaireInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionSetUpdateWithWhereUniqueWithoutQuestionnaireInputObjectSchema =
  Schema;
