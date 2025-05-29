import { z } from 'zod';
import { QuestionnaireWhereUniqueInputObjectSchema } from './objects/QuestionnaireWhereUniqueInput.schema';

export const QuestionnaireDeleteOneSchema = z.object({
  where: QuestionnaireWhereUniqueInputObjectSchema,
});
