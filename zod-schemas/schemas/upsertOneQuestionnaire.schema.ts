import { z } from 'zod';
import { QuestionnaireWhereUniqueInputObjectSchema } from './objects/QuestionnaireWhereUniqueInput.schema';
import { QuestionnaireCreateInputObjectSchema } from './objects/QuestionnaireCreateInput.schema';
import { QuestionnaireUncheckedCreateInputObjectSchema } from './objects/QuestionnaireUncheckedCreateInput.schema';
import { QuestionnaireUpdateInputObjectSchema } from './objects/QuestionnaireUpdateInput.schema';
import { QuestionnaireUncheckedUpdateInputObjectSchema } from './objects/QuestionnaireUncheckedUpdateInput.schema';

export const QuestionnaireUpsertSchema = z.object({
  where: QuestionnaireWhereUniqueInputObjectSchema,
  create: z.union([
    QuestionnaireCreateInputObjectSchema,
    QuestionnaireUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    QuestionnaireUpdateInputObjectSchema,
    QuestionnaireUncheckedUpdateInputObjectSchema,
  ]),
});
