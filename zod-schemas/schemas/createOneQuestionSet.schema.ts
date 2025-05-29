import { z } from 'zod';
import { QuestionSetCreateInputObjectSchema } from './objects/QuestionSetCreateInput.schema';
import { QuestionSetUncheckedCreateInputObjectSchema } from './objects/QuestionSetUncheckedCreateInput.schema';

export const QuestionSetCreateOneSchema = z.object({
  data: z.union([
    QuestionSetCreateInputObjectSchema,
    QuestionSetUncheckedCreateInputObjectSchema,
  ]),
});
