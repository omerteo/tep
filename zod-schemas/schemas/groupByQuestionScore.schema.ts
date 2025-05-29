import { z } from 'zod';
import { QuestionScoreWhereInputObjectSchema } from './objects/QuestionScoreWhereInput.schema';
import { QuestionScoreOrderByWithAggregationInputObjectSchema } from './objects/QuestionScoreOrderByWithAggregationInput.schema';
import { QuestionScoreScalarWhereWithAggregatesInputObjectSchema } from './objects/QuestionScoreScalarWhereWithAggregatesInput.schema';
import { QuestionScoreScalarFieldEnumSchema } from './enums/QuestionScoreScalarFieldEnum.schema';

export const QuestionScoreGroupBySchema = z.object({
  where: QuestionScoreWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      QuestionScoreOrderByWithAggregationInputObjectSchema,
      QuestionScoreOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: QuestionScoreScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(QuestionScoreScalarFieldEnumSchema),
});
