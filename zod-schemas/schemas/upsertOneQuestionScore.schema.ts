import { z } from 'zod';
import { QuestionScoreWhereUniqueInputObjectSchema } from './objects/QuestionScoreWhereUniqueInput.schema';
import { QuestionScoreCreateInputObjectSchema } from './objects/QuestionScoreCreateInput.schema';
import { QuestionScoreUncheckedCreateInputObjectSchema } from './objects/QuestionScoreUncheckedCreateInput.schema';
import { QuestionScoreUpdateInputObjectSchema } from './objects/QuestionScoreUpdateInput.schema';
import { QuestionScoreUncheckedUpdateInputObjectSchema } from './objects/QuestionScoreUncheckedUpdateInput.schema';

export const QuestionScoreUpsertSchema = z.object({
  where: QuestionScoreWhereUniqueInputObjectSchema,
  create: z.union([
    QuestionScoreCreateInputObjectSchema,
    QuestionScoreUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    QuestionScoreUpdateInputObjectSchema,
    QuestionScoreUncheckedUpdateInputObjectSchema,
  ]),
});
