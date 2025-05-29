import { z } from 'zod';
import { QuestionSetCreateManyInputObjectSchema } from './objects/QuestionSetCreateManyInput.schema';

export const QuestionSetCreateManySchema = z.object({
  data: z.union([
    QuestionSetCreateManyInputObjectSchema,
    z.array(QuestionSetCreateManyInputObjectSchema),
  ]),
});
