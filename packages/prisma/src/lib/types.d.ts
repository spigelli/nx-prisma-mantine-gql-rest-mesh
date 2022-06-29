import { PrismaClient } from '@prisma/client';

export interface Context {
  prisma: PrismaClient<{ rejectOnNotFound: false }>;
}

export function createContext(ctx: any): Promise<Context>;
