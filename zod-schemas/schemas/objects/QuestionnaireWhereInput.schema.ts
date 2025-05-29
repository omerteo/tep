import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { QuestionSetListRelationFilterObjectSchema } from './QuestionSetListRelationFilter.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionnaireWhereInputObjectSchema),
        z.lazy(() => QuestionnaireWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionnaireWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionnaireWhereInputObjectSchema),
        z.lazy(() => QuestionnaireWhereInputObjectSchema).array(),
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
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    questionSets: z
      .lazy(() => QuestionSetListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionnaireWhereInputObjectSchema = Schema;
