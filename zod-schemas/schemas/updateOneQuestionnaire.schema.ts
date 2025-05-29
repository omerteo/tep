import { z } from 'zod';
import { QuestionnaireUpdateInputObjectSchema } from './objects/QuestionnaireUpdateInput.schema';
import { QuestionnaireUncheckedUpdateInputObjectSchema } from './objects/QuestionnaireUncheckedUpdateInput.schema';
import { QuestionnaireWhereUniqueInputObjectSchema } from './objects/QuestionnaireWhereUniqueInput.schema';

export const QuestionnaireUpdateOneSchema = z.object({
  data: z.union([
    QuestionnaireUpdateInputObjectSchema,
    QuestionnaireUncheckedUpdateInputObjectSchema,
  ]),
  where: QuestionnaireWhereUniqueInputObjectSchema,
});
