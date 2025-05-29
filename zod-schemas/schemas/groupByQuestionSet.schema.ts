import { z } from 'zod';
import { QuestionSetWhereInputObjectSchema } from './objects/QuestionSetWhereInput.schema';
import { QuestionSetOrderByWithAggregationInputObjectSchema } from './objects/QuestionSetOrderByWithAggregationInput.schema';
import { QuestionSetScalarWhereWithAggregatesInputObjectSchema } from './objects/QuestionSetScalarWhereWithAggregatesInput.schema';
import { QuestionSetScalarFieldEnumSchema } from './enums/QuestionSetScalarFieldEnum.schema';

export const QuestionSetGroupBySchema = z.object({
  where: QuestionSetWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      QuestionSetOrderByWithAggregationInputObjectSchema,
      QuestionSetOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: QuestionSetScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(QuestionSetScalarFieldEnumSchema),
});
