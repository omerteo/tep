import { z } from 'zod';
import { QuestionSetOrderByWithRelationInputObjectSchema } from './objects/QuestionSetOrderByWithRelationInput.schema';
import { QuestionSetWhereInputObjectSchema } from './objects/QuestionSetWhereInput.schema';
import { QuestionSetWhereUniqueInputObjectSchema } from './objects/QuestionSetWhereUniqueInput.schema';
import { QuestionSetCountAggregateInputObjectSchema } from './objects/QuestionSetCountAggregateInput.schema';
import { QuestionSetMinAggregateInputObjectSchema } from './objects/QuestionSetMinAggregateInput.schema';
import { QuestionSetMaxAggregateInputObjectSchema } from './objects/QuestionSetMaxAggregateInput.schema';

export const QuestionSetAggregateSchema = z.object({
  orderBy: z
    .union([
      QuestionSetOrderByWithRelationInputObjectSchema,
      QuestionSetOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionSetWhereInputObjectSchema.optional(),
  cursor: QuestionSetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), QuestionSetCountAggregateInputObjectSchema])
    .optional(),
  _min: QuestionSetMinAggregateInputObjectSchema.optional(),
  _max: QuestionSetMaxAggregateInputObjectSchema.optional(),
});
