import { z } from 'zod';
import { QuestionSetWhereUniqueInputObjectSchema } from './objects/QuestionSetWhereUniqueInput.schema';

export const QuestionSetFindUniqueSchema = z.object({
  where: QuestionSetWhereUniqueInputObjectSchema,
});
