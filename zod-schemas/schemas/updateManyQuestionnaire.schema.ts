import { z } from 'zod';
import { QuestionnaireUpdateManyMutationInputObjectSchema } from './objects/QuestionnaireUpdateManyMutationInput.schema';
import { QuestionnaireWhereInputObjectSchema } from './objects/QuestionnaireWhereInput.schema';

export const QuestionnaireUpdateManySchema = z.object({
  data: QuestionnaireUpdateManyMutationInputObjectSchema,
  where: QuestionnaireWhereInputObjectSchema.optional(),
});
