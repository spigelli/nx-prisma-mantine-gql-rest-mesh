import { PrismaClient } from "@prisma/client";

export interface Context {
  prisma: PrismaClient<{'rejectOnNotFound': true}>;
}

export function createContext(ctx: any): Promise<Context>;
