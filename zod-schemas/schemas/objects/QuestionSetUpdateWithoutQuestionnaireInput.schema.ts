import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { QuestionScoreUpdateManyWithoutQuestionSetNestedInputObjectSchema } from './QuestionScoreUpdateManyWithoutQuestionSetNestedInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUpdateWithoutQuestionnaireInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    questionScores: z
      .lazy(
        () => QuestionScoreUpdateManyWithoutQuestionSetNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionSetUpdateWithoutQuestionnaireInputObjectSchema = Schema;
