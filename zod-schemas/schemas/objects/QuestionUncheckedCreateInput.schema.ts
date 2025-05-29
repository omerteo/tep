import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    text: z.string(),
    createdAt: z.coerce.date().optional(),
    createdBy: z.string(),
  })
  .strict();

export const QuestionUncheckedCreateInputObjectSchema = Schema;
