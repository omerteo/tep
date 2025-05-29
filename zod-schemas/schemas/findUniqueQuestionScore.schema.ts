import { z } from 'zod';
import { QuestionScoreWhereUniqueInputObjectSchema } from './objects/QuestionScoreWhereUniqueInput.schema';

export const QuestionScoreFindUniqueSchema = z.object({
  where: QuestionScoreWhereUniqueInputObjectSchema,
});
