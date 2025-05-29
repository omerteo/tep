import { z } from 'zod';
import { QuestionScoreWhereInputObjectSchema } from './objects/QuestionScoreWhereInput.schema';

export const QuestionScoreDeleteManySchema = z.object({
  where: QuestionScoreWhereInputObjectSchema.optional(),
});
