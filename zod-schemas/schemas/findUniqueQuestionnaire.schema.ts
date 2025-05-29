import { z } from 'zod';
import { QuestionnaireWhereUniqueInputObjectSchema } from './objects/QuestionnaireWhereUniqueInput.schema';

export const QuestionnaireFindUniqueSchema = z.object({
  where: QuestionnaireWhereUniqueInputObjectSchema,
});
