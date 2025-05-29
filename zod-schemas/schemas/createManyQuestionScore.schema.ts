import { z } from 'zod';
import { QuestionScoreCreateManyInputObjectSchema } from './objects/QuestionScoreCreateManyInput.schema';

export const QuestionScoreCreateManySchema = z.object({
  data: z.union([
    QuestionScoreCreateManyInputObjectSchema,
    z.array(QuestionScoreCreateManyInputObjectSchema),
  ]),
});
