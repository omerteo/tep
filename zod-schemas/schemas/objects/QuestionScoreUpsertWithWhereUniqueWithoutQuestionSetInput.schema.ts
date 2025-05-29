import { z } from 'zod';
import { QuestionScoreWhereUniqueInputObjectSchema } from './QuestionScoreWhereUniqueInput.schema';
import { QuestionScoreUpdateWithoutQuestionSetInputObjectSchema } from './QuestionScoreUpdateWithoutQuestionSetInput.schema';
import { QuestionScoreUncheckedUpdateWithoutQuestionSetInputObjectSchema } from './QuestionScoreUncheckedUpdateWithoutQuestionSetInput.schema';
import { QuestionScoreCreateWithoutQuestionSetInputObjectSchema } from './QuestionScoreCreateWithoutQuestionSetInput.schema';
import { QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema } from './QuestionScoreUncheckedCreateWithoutQuestionSetInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreUpsertWithWhereUniqueWithoutQuestionSetInput> =
  z
    .object({
      where: z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => QuestionScoreUpdateWithoutQuestionSetInputObjectSchema),
        z.lazy(
          () => QuestionScoreUncheckedUpdateWithoutQuestionSetInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => QuestionScoreCreateWithoutQuestionSetInputObjectSchema),
        z.lazy(
          () => QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionScoreUpsertWithWhereUniqueWithoutQuestionSetInputObjectSchema =
  Schema;
