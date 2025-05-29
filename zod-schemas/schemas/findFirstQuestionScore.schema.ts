import { z } from 'zod';
import { QuestionScoreOrderByWithRelationInputObjectSchema } from './objects/QuestionScoreOrderByWithRelationInput.schema';
import { QuestionScoreWhereInputObjectSchema } from './objects/QuestionScoreWhereInput.schema';
import { QuestionScoreWhereUniqueInputObjectSchema } from './objects/QuestionScoreWhereUniqueInput.schema';
import { QuestionScoreScalarFieldEnumSchema } from './enums/QuestionScoreScalarFieldEnum.schema';

export const QuestionScoreFindFirstSchema = z.object({
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
  distinct: z.array(QuestionScoreScalarFieldEnumSchema).optional(),
});
