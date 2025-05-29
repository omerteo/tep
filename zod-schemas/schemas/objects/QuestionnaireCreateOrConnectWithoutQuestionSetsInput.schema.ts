import { z } from 'zod';
import { QuestionnaireWhereUniqueInputObjectSchema } from './QuestionnaireWhereUniqueInput.schema';
import { QuestionnaireCreateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireCreateWithoutQuestionSetsInput.schema';
import { QuestionnaireUncheckedCreateWithoutQuestionSetsInputObjectSchema } from './QuestionnaireUncheckedCreateWithoutQuestionSetsInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.QuestionnaireCreateOrConnectWithoutQuestionSetsInput> =
  z
    .object({
      where: z.lazy(() => QuestionnaireWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionnaireCreateWithoutQuestionSetsInputObjectSchema),
        z.lazy(
          () =>
            QuestionnaireUncheckedCreateWithoutQuestionSetsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const QuestionnaireCreateOrConnectWithoutQuestionSetsInputObjectSchema =
  Schema;
