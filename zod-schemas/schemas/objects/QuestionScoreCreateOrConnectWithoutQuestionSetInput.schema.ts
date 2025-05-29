import { z } from 'zod';
import { QuestionScoreWhereUniqueInputObjectSchema } from './QuestionScoreWhereUniqueInput.schema';
import { QuestionScoreCreateWithoutQuestionSetInputObjectSchema } from './QuestionScoreCreateWithoutQuestionSetInput.schema';
import { QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema } from './QuestionScoreUncheckedCreateWithoutQuestionSetInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreCreateOrConnectWithoutQuestionSetInput> =
  z
    .object({
      where: z.lazy(() => QuestionScoreWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionScoreCreateWithoutQuestionSetInputObjectSchema),
        z.lazy(
          () => QuestionScoreUncheckedCreateWithoutQuestionSetInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionScoreCreateOrConnectWithoutQuestionSetInputObjectSchema =
  Schema;
