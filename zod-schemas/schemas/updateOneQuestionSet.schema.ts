import { z } from 'zod';
import { QuestionSetUpdateInputObjectSchema } from './objects/QuestionSetUpdateInput.schema';
import { QuestionSetUncheckedUpdateInputObjectSchema } from './objects/QuestionSetUncheckedUpdateInput.schema';
import { QuestionSetWhereUniqueInputObjectSchema } from './objects/QuestionSetWhereUniqueInput.schema';

export const QuestionSetUpdateOneSchema = z.object({
  data: z.union([
    QuestionSetUpdateInputObjectSchema,
    QuestionSetUncheckedUpdateInputObjectSchema,
  ]),
  where: QuestionSetWhereUniqueInputObjectSchema,
});
