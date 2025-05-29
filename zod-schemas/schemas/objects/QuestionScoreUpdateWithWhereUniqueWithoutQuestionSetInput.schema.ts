import { z } from 'zod';
import { QuestionScoreWhereUniqueInputObjectSchema } from './QuestionScoreWhereUniqueInput.schema';
import { QuestionScoreUpdateWithoutQuestionSetInputObjectSchema } from './QuestionScoreUpdateWithoutQuestionSetInput.schema';
import { QuestionScoreUncheckedUpdateWithoutQuestionSetInputObjectSchema } from './QuestionScoreUncheckedUpdateWithoutQuestionSetInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreUpdateWithWhereUniqueWithoutQuestionSetInput> =
  z
    .object({
      where: z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionScoreUpdateWithoutQuestionSetInputObjectSchema),
        z.lazy(
          () => QuestionScoreUncheckedUpdateWithoutQuestionSetInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionScoreUpdateWithWhereUniqueWithoutQuestionSetInputObjectSchema =
  Schema;
