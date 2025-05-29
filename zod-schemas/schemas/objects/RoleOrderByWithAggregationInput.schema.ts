import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RoleCountOrderByAggregateInputObjectSchema } from './RoleCountOrderByAggregateInput.schema';
import { RoleAvgOrderByAggregateInputObjectSchema } from './RoleAvgOrderByAggregateInput.schema';
import { RoleMaxOrderByAggregateInputObjectSchema } from './RoleMaxOrderByAggregateInput.schema';
import { RoleMinOrderByAggregateInputObjectSchema } from './RoleMinOrderByAggregateInput.schema';
import { RoleSumOrderByAggregateInputObjectSchema } from './RoleSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    users: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RoleCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => RoleAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RoleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RoleMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RoleSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RoleOrderByWithAggregationInputObjectSchema = Schema;
