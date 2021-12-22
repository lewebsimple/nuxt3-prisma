import { defineNuxtModule } from '@nuxt/kit';
import logger from './logger';

export interface NuxtPrismaOptions {}

export default defineNuxtModule<NuxtPrismaOptions>({
  meta: {
    name: 'nuxt3-prisma',
    configKey: 'prisma',
  },
  defaults: {},
  setup() {
    logger.info('Module loaded');
  },
});

declare module '@nuxt/schema' {
  interface NuxtConfig {
    prisma?: NuxtPrismaOptions
  }
  interface NuxtOptions {
    prisma?: NuxtPrismaOptions
  }
}
