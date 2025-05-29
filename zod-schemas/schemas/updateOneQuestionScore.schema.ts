import { z } from 'zod';
import { QuestionScoreUpdateInputObjectSchema } from './objects/QuestionScoreUpdateInput.schema';
import { QuestionScoreUncheckedUpdateInputObjectSchema } from './objects/QuestionScoreUncheckedUpdateInput.schema';
import { QuestionScoreWhereUniqueInputObjectSchema } from './objects/QuestionScoreWhereUniqueInput.schema';

export const QuestionScoreUpdateOneSchema = z.object({
  data: z.union([
    QuestionScoreUpdateInputObjectSchema,
    QuestionScoreUncheckedUpdateInputObjectSchema,
  ]),
  where: QuestionScoreWhereUniqueInputObjectSchema,
});
