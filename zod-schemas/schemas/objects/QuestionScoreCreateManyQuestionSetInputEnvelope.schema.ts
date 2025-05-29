import { z } from 'zod';
import { QuestionScoreCreateManyQuestionSetInputObjectSchema } from './QuestionScoreCreateManyQuestionSetInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionScoreCreateManyQuestionSetInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => QuestionScoreCreateManyQuestionSetInputObjectSchema),
        z
          .lazy(() => QuestionScoreCreateManyQuestionSetInputObjectSchema)
          .array(),
      ]),
    })
    .strict();

export const QuestionScoreCreateManyQuestionSetInputEnvelopeObjectSchema =
  Schema;
