import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    users: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleMinOrderByAggregateInputObjectSchema = Schema;
