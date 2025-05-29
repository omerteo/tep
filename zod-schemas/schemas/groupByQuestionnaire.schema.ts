import { z } from 'zod';
import { QuestionnaireWhereInputObjectSchema } from './objects/QuestionnaireWhereInput.schema';
import { QuestionnaireOrderByWithAggregationInputObjectSchema } from './objects/QuestionnaireOrderByWithAggregationInput.schema';
import { QuestionnaireScalarWhereWithAggregatesInputObjectSchema } from './objects/QuestionnaireScalarWhereWithAggregatesInput.schema';
import { QuestionnaireScalarFieldEnumSchema } from './enums/QuestionnaireScalarFieldEnum.schema';

export const QuestionnaireGroupBySchema = z.object({
  where: QuestionnaireWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      QuestionnaireOrderByWithAggregationInputObjectSchema,
      QuestionnaireOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: QuestionnaireScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(QuestionnaireScalarFieldEnumSchema),
});
