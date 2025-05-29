import { z } from 'zod';
import { QuestionScoreUpdateManyMutationInputObjectSchema } from './objects/QuestionScoreUpdateManyMutationInput.schema';
import { QuestionScoreWhereInputObjectSchema } from './objects/QuestionScoreWhereInput.schema';

export const QuestionScoreUpdateManySchema = z.object({
  data: QuestionScoreUpdateManyMutationInputObjectSchema,
  where: QuestionScoreWhereInputObjectSchema.optional(),
});
