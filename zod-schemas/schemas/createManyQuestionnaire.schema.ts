import { z } from 'zod';
import { QuestionnaireCreateManyInputObjectSchema } from './objects/QuestionnaireCreateManyInput.schema';

export const QuestionnaireCreateManySchema = z.object({
  data: z.union([
    QuestionnaireCreateManyInputObjectSchema,
    z.array(QuestionnaireCreateManyInputObjectSchema),
  ]),
});
