import { z } from 'zod';
import { QuestionSetScalarWhereInputObjectSchema } from './QuestionSetScalarWhereInput.schema';
import { QuestionSetUpdateManyMutationInputObjectSchema } from './QuestionSetUpdateManyMutationInput.schema';
import { QuestionSetUncheckedUpdateManyWithoutQuestionSetsInputObjectSchema } from './QuestionSetUncheckedUpdateManyWithoutQuestionSetsInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionSetUpdateManyWithWhereWithoutQuestionnaireInput> =
  z
    .object({
      where: z.lazy(() => QuestionSetScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionSetUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            QuestionSetUncheckedUpdateManyWithoutQuestionSetsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionSetUpdateManyWithWhereWithoutQuestionnaireInputObjectSchema =
  Schema;
