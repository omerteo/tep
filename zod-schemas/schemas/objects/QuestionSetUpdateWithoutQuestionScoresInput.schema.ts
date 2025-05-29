import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { QuestionnaireUpdateOneRequiredWithoutQuestionSetsNestedInputObjectSchema } from './QuestionnaireUpdateOneRequiredWithoutQuestionSetsNestedInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUpdateWithoutQuestionScoresInput> = z
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
    questionnaire: z
      .lazy(
        () =>
          QuestionnaireUpdateOneRequiredWithoutQuestionSetsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionSetUpdateWithoutQuestionScoresInputObjectSchema = Schema;
