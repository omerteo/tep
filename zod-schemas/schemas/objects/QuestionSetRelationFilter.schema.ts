import { z } from 'zod';
import { QuestionSetWhereInputObjectSchema } from './QuestionSetWhereInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetRelationFilter> = z
  .object({
    is: z
      .lazy(() => QuestionSetWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => QuestionSetWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const QuestionSetRelationFilterObjectSchema = Schema;
