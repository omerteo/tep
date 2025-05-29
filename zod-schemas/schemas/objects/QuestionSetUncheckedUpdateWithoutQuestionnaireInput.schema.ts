import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { QuestionScoreUncheckedUpdateManyWithoutQuestionSetNestedInputObjectSchema } from './QuestionScoreUncheckedUpdateManyWithoutQuestionSetNestedInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUncheckedUpdateWithoutQuestionnaireInput> =
  z
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
          () =>
            QuestionScoreUncheckedUpdateManyWithoutQuestionSetNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const QuestionSetUncheckedUpdateWithoutQuestionnaireInputObjectSchema =
  Schema;
