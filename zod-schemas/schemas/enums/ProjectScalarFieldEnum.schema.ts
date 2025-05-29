import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'createdAt',
]);
