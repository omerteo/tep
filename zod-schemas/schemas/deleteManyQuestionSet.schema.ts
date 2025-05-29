import { z } from 'zod';
import { QuestionSetWhereInputObjectSchema } from './objects/QuestionSetWhereInput.schema';

export const QuestionSetDeleteManySchema = z.object({
  where: QuestionSetWhereInputObjectSchema.optional(),
});
