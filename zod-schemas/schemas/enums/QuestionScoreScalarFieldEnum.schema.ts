import { z } from 'zod';

export const QuestionScoreScalarFieldEnumSchema = z.enum([
  'id',
  'score',
  'weight',
  'questionId',
  'questionSetId',
  'reviewId',
]);
