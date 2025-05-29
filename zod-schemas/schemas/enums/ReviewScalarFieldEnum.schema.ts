import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'createdAt',
  'reviewers',
  'categoryId',
  'revieweeId',
  'projectId',
]);
