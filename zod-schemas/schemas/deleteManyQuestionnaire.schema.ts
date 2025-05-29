import { z } from 'zod';
import { QuestionnaireWhereInputObjectSchema } from './objects/QuestionnaireWhereInput.schema';

export const QuestionnaireDeleteManySchema = z.object({
  where: QuestionnaireWhereInputObjectSchema.optional(),
});
