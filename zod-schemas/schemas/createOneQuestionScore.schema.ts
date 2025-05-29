import { z } from 'zod';
import { QuestionScoreCreateInputObjectSchema } from './objects/QuestionScoreCreateInput.schema';
import { QuestionScoreUncheckedCreateInputObjectSchema } from './objects/QuestionScoreUncheckedCreateInput.schema';

export const QuestionScoreCreateOneSchema = z.object({
  data: z.union([
    QuestionScoreCreateInputObjectSchema,
    QuestionScoreUncheckedCreateInputObjectSchema,
  ]),
});
