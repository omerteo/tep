import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.CategoryCreateManyInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
  })
  .strict();

export const CategoryCreateManyInputObjectSchema = Schema;
