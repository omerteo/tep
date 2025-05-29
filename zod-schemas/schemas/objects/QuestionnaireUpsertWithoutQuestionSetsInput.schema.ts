import { z } from 'zod';
import { QuestionnaireUpdateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUpdateWithoutQuestionSetsInput.schema';
import { QuestionnaireUncheckedUpdateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUncheckedUpdateWithoutQuestionSetsInput.schema';
import { QuestionnaireCreateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireCreateWithoutQuestionSetsInput.schema';
import { QuestionnaireUncheckedCreateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUncheckedCreateWithoutQuestionSetsInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireUpsertWithoutQuestionSetsInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionnaireUpdateWithoutQuestionSetsInputObjectSchema),
      z.lazy(
        () => QuestionnaireUncheckedUpdateWithoutQuestionSetsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => QuestionnaireCreateWithoutQuestionSetsInputObjectSchema),
      z.lazy(
        () => QuestionnaireUncheckedCreateWithoutQuestionSetsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const QuestionnaireUpsertWithoutQuestionSetsInputObjectSchema = Schema;
