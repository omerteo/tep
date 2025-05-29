import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { QuestionSetRelationFilterObjectSchema } from './QuestionSetRelationFilter.schema';
import { QuestionSetWhereInputObjectSchema } from './QuestionSetWhereInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionScoreWhereInputObjectSchema),
        z.lazy(() => QuestionScoreWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionScoreWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionScoreWhereInputObjectSchema),
        z.lazy(() => QuestionScoreWhereInputObjectSchema).array(),
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
    questionSet: z
      .union([
        z.lazy(() => QuestionSetRelationFilterObjectSchema),
        z.lazy(() => QuestionSetWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const QuestionScoreWhereInputObjectSchema = Schema;
