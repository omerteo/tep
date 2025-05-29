import { z } from 'zod';
import { QuestionScoreWhereUniqueInputObjectSchema } from './objects/QuestionScoreWhereUniqueInput.schema';

export const QuestionScoreDeleteOneSchema = z.object({
  where: QuestionScoreWhereUniqueInputObjectSchema,
});
