import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.RoleMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    users: z.literal(true).optional(),
  })
  .strict();

export const RoleMinAggregateInputObjectSchema = Schema;
