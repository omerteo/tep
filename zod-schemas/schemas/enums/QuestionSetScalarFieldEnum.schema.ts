import { z } from 'zod';

export const QuestionSetScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'questionnaireId',
]);
