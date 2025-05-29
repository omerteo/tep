import { z } from 'zod';
import { QuestionSetCreateManyQuestionnaireInputObjectSchema } from './QuestionSetCreateManyQuestionnaireInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetCreateManyQuestionnaireInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => QuestionSetCreateManyQuestionnaireInputObjectSchema),
        z
          .lazy(() => QuestionSetCreateManyQuestionnaireInputObjectSchema)
          .array(),
      ]),
    })
    .strict();

export const QuestionSetCreateManyQuestionnaireInputEnvelopeObjectSchema =
  Schema;
