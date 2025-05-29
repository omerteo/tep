import { z } from 'zod';
import { QuestionSetWhereInputObjectSchema } from './QuestionSetWhereInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetListRelationFilter> = z
  .object({
    every: z.lazy(() => QuestionSetWhereInputObjectSchema).optional(),
    some: z.lazy(() => QuestionSetWhereInputObjectSchema).optional(),
    none: z.lazy(() => QuestionSetWhereInputObjectSchema).optional(),
  })
  .strict();

export const QuestionSetListRelationFilterObjectSchema = Schema;
