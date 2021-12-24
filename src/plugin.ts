import pkg from '@prisma/client';
// @ts-expect-error: #app resolved by Nuxt3
import { defineNuxtPlugin } from '#app';
export const { PrismaClient } = pkg;

export default defineNuxtPlugin(() => {
  const prisma = new PrismaClient();
  return { provide: { prisma } };
});
