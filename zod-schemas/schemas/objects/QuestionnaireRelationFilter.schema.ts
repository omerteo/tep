import { z } from 'zod';
import { QuestionnaireWhereInputObjectSchema } from './QuestionnaireWhereInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireRelationFilter> = z
  .object({
    is: z
      .lazy(() => QuestionnaireWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => QuestionnaireWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const QuestionnaireRelationFilterObjectSchema = Schema;
