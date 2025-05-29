import { z } from 'zod';

export const QuestionnaireScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'createdAt',
]);
