import { z } from 'zod';
import { QuestionScoreOrderByWithRelationInputObjectSchema } from './objects/QuestionScoreOrderByWithRelationInput.schema';
import { QuestionScoreWhereInputObjectSchema } from './objects/QuestionScoreWhereInput.schema';
import { QuestionScoreWhereUniqueInputObjectSchema } from './objects/QuestionScoreWhereUniqueInput.schema';
import { QuestionScoreCountAggregateInputObjectSchema } from './objects/QuestionScoreCountAggregateInput.schema';
import { QuestionScoreMinAggregateInputObjectSchema } from './objects/QuestionScoreMinAggregateInput.schema';
import { QuestionScoreMaxAggregateInputObjectSchema } from './objects/QuestionScoreMaxAggregateInput.schema';
import { QuestionScoreAvgAggregateInputObjectSchema } from './objects/QuestionScoreAvgAggregateInput.schema';
import { QuestionScoreSumAggregateInputObjectSchema } from './objects/QuestionScoreSumAggregateInput.schema';

export const QuestionScoreAggregateSchema = z.object({
  orderBy: z
    .union([
      QuestionScoreOrderByWithRelationInputObjectSchema,
      QuestionScoreOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionScoreWhereInputObjectSchema.optional(),
  cursor: QuestionScoreWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), QuestionScoreCountAggregateInputObjectSchema])
    .optional(),
  _min: QuestionScoreMinAggregateInputObjectSchema.optional(),
  _max: QuestionScoreMaxAggregateInputObjectSchema.optional(),
  _avg: QuestionScoreAvgAggregateInputObjectSchema.optional(),
  _sum: QuestionScoreSumAggregateInputObjectSchema.optional(),
});
