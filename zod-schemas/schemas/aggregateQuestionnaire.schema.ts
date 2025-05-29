import { z } from 'zod';
import { QuestionnaireOrderByWithRelationInputObjectSchema } from './objects/QuestionnaireOrderByWithRelationInput.schema';
import { QuestionnaireWhereInputObjectSchema } from './objects/QuestionnaireWhereInput.schema';
import { QuestionnaireWhereUniqueInputObjectSchema } from './objects/QuestionnaireWhereUniqueInput.schema';
import { QuestionnaireCountAggregateInputObjectSchema } from './objects/QuestionnaireCountAggregateInput.schema';
import { QuestionnaireMinAggregateInputObjectSchema } from './objects/QuestionnaireMinAggregateInput.schema';
import { QuestionnaireMaxAggregateInputObjectSchema } from './objects/QuestionnaireMaxAggregateInput.schema';

export const QuestionnaireAggregateSchema = z.object({
  orderBy: z
    .union([
      QuestionnaireOrderByWithRelationInputObjectSchema,
      QuestionnaireOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionnaireWhereInputObjectSchema.optional(),
  cursor: QuestionnaireWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), QuestionnaireCountAggregateInputObjectSchema])
    .optional(),
  _min: QuestionnaireMinAggregateInputObjectSchema.optional(),
  _max: QuestionnaireMaxAggregateInputObjectSchema.optional(),
});
