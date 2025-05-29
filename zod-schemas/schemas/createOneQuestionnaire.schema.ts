import { z } from 'zod';
import { QuestionnaireCreateInputObjectSchema } from './objects/QuestionnaireCreateInput.schema';
import { QuestionnaireUncheckedCreateInputObjectSchema } from './objects/QuestionnaireUncheckedCreateInput.schema';

export const QuestionnaireCreateOneSchema = z.object({
  data: z.union([
    QuestionnaireCreateInputObjectSchema,
    QuestionnaireUncheckedCreateInputObjectSchema,
  ]),
});
