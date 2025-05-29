import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionScoreScalarWhereInputObjectSchema),
        z.lazy(() => QuestionScoreScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionScoreScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionScoreScalarWhereInputObjectSchema),
        z.lazy(() => QuestionScoreScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    score: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    weight: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    questionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    questionSetId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reviewId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const QuestionScoreScalarWhereInputObjectSchema = Schema;
