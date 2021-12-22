import { defineNuxtModule } from '@nuxt/kit';
import logger from './logger';

export interface NuxtPrismaOptions {}

export default defineNuxtModule<NuxtPrismaOptions>({
  meta: {
    name: 'nuxt3-prisma',
    configKey: 'prisma',
  },
  defaults: {},
  setup(_options, nuxt) {
    nuxt.hook('build:before', () => {
      logger.info('Nuxt3 Prisma module setup');
    });
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
