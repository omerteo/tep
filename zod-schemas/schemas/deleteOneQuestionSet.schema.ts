import { z } from 'zod';
import { QuestionSetWhereUniqueInputObjectSchema } from './objects/QuestionSetWhereUniqueInput.schema';

export const QuestionSetDeleteOneSchema = z.object({
  where: QuestionSetWhereUniqueInputObjectSchema,
});
