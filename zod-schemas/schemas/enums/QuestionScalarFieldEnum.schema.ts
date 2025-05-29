import { z } from 'zod';

export const QuestionScalarFieldEnumSchema = z.enum([
  'id',
  'text',
  'createdAt',
  'createdBy',
]);
