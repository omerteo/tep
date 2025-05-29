import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionCreateInput> = z
  .object({
    id: z.string().optional(),
    text: z.string(),
    createdAt: z.coerce.date().optional(),
    createdBy: z.string(),
  })
  .strict();

export const QuestionCreateInputObjectSchema = Schema;
