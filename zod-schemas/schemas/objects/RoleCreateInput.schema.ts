import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.RoleCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    users: z.string(),
  })
  .strict();

export const RoleCreateInputObjectSchema = Schema;
