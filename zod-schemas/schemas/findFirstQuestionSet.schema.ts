import { z } from 'zod';
import { QuestionSetOrderByWithRelationInputObjectSchema } from './objects/QuestionSetOrderByWithRelationInput.schema';
import { QuestionSetWhereInputObjectSchema } from './objects/QuestionSetWhereInput.schema';
import { QuestionSetWhereUniqueInputObjectSchema } from './objects/QuestionSetWhereUniqueInput.schema';
import { QuestionSetScalarFieldEnumSchema } from './enums/QuestionSetScalarFieldEnum.schema';

export const QuestionSetFindFirstSchema = z.object({
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
  distinct: z.array(QuestionSetScalarFieldEnumSchema).optional(),
});
