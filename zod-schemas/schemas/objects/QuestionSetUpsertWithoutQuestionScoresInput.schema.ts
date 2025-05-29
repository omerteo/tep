import { z } from 'zod';
import { QuestionSetUpdateWithoutQuestionScoresInputObjectSchema } from './QuestionSetUpdateWithoutQuestionScoresInput.schema';
import { QuestionSetUncheckedUpdateWithoutQuestionScoresInputObjectSchema } from './QuestionSetUncheckedUpdateWithoutQuestionScoresInput.schema';
import { QuestionSetCreateWithoutQuestionScoresInputObjectSchema } from './QuestionSetCreateWithoutQuestionScoresInput.schema';
import { QuestionSetUncheckedCreateWithoutQuestionScoresInputObjectSchema } from './QuestionSetUncheckedCreateWithoutQuestionScoresInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUpsertWithoutQuestionScoresInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionSetUpdateWithoutQuestionScoresInputObjectSchema),
      z.lazy(
        () => QuestionSetUncheckedUpdateWithoutQuestionScoresInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => QuestionSetCreateWithoutQuestionScoresInputObjectSchema),
      z.lazy(
        () => QuestionSetUncheckedCreateWithoutQuestionScoresInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const QuestionSetUpsertWithoutQuestionScoresInputObjectSchema = Schema;
