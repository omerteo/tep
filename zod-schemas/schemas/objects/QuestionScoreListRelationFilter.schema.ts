import { z } from 'zod';
import { QuestionScoreWhereInputObjectSchema } from './QuestionScoreWhereInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreListRelationFilter> = z
  .object({
    every: z.lazy(() => QuestionScoreWhereInputObjectSchema).optional(),
    some: z.lazy(() => QuestionScoreWhereInputObjectSchema).optional(),
    none: z.lazy(() => QuestionScoreWhereInputObjectSchema).optional(),
  })
  .strict();

export const QuestionScoreListRelationFilterObjectSchema = Schema;
