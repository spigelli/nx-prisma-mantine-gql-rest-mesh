import { PrismaClient } from "@prisma/client";
import { Context } from "./types";

export const prisma = new PrismaClient({'rejectOnNotFound': true});

export const createContext = async (ctx: any): Promise<Context> => {
  return { ...ctx, prisma };
};
