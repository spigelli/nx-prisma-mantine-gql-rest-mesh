import { PrismaClient } from '@prisma/client';
import { Context } from './types';

export const prisma = new PrismaClient();

export { PrismaClient } from '@prisma/client';

export const createContext = (ctx: any): Context => {
  return { ...ctx, prisma };
};
