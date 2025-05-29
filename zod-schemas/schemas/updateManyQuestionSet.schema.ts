import { z } from 'zod';
import { QuestionSetUpdateManyMutationInputObjectSchema } from './objects/QuestionSetUpdateManyMutationInput.schema';
import { QuestionSetWhereInputObjectSchema } from './objects/QuestionSetWhereInput.schema';

export const QuestionSetUpdateManySchema = z.object({
  data: QuestionSetUpdateManyMutationInputObjectSchema,
  where: QuestionSetWhereInputObjectSchema.optional(),
});
