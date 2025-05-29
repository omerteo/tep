import { z } from 'zod';
import { QuestionSetWhereUniqueInputObjectSchema } from './objects/QuestionSetWhereUniqueInput.schema';
import { QuestionSetCreateInputObjectSchema } from './objects/QuestionSetCreateInput.schema';
import { QuestionSetUncheckedCreateInputObjectSchema } from './objects/QuestionSetUncheckedCreateInput.schema';
import { QuestionSetUpdateInputObjectSchema } from './objects/QuestionSetUpdateInput.schema';
import { QuestionSetUncheckedUpdateInputObjectSchema } from './objects/QuestionSetUncheckedUpdateInput.schema';

export const QuestionSetUpsertSchema = z.object({
  where: QuestionSetWhereUniqueInputObjectSchema,
  create: z.union([
    QuestionSetCreateInputObjectSchema,
    QuestionSetUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    QuestionSetUpdateInputObjectSchema,
    QuestionSetUncheckedUpdateInputObjectSchema,
  ]),
});
