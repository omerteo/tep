import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { QuestionnaireRelationFilterObjectSchema } from './QuestionnaireRelationFilter.schema';
import { QuestionnaireWhereInputObjectSchema } from './QuestionnaireWhereInput.schema';
import { QuestionScoreListRelationFilterObjectSchema } from './QuestionScoreListRelationFilter.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionSetWhereInputObjectSchema),
        z.lazy(() => QuestionSetWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionSetWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionSetWhereInputObjectSchema),
        z.lazy(() => QuestionSetWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    questionnaireId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    questionnaire: z
      .union([
        z.lazy(() => QuestionnaireRelationFilterObjectSchema),
        z.lazy(() => QuestionnaireWhereInputObjectSchema),
      ])
      .optional(),
    questionScores: z
      .lazy(() => QuestionScoreListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionSetWhereInputObjectSchema = Schema;
