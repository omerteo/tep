import { z } from 'zod';
import { QuestionnaireOrderByWithRelationInputObjectSchema } from './objects/QuestionnaireOrderByWithRelationInput.schema';
import { QuestionnaireWhereInputObjectSchema } from './objects/QuestionnaireWhereInput.schema';
import { QuestionnaireWhereUniqueInputObjectSchema } from './objects/QuestionnaireWhereUniqueInput.schema';
import { QuestionnaireScalarFieldEnumSchema } from './enums/QuestionnaireScalarFieldEnum.schema';

export const QuestionnaireFindManySchema = z.object({
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
  distinct: z.array(QuestionnaireScalarFieldEnumSchema).optional(),
});
