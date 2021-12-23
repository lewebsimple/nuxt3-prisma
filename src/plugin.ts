// @ts-expect-error: #app resolved by Nuxt3
import { defineNuxtPlugin } from '#app';
// @ts-expect-error Resolved at runtime
import prisma from '#build/prisma-client.mjs';

export default defineNuxtPlugin(() => {
  return { prisma };
});
