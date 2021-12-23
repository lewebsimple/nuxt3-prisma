import { execSync } from 'child_process';
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
      const start = Date.now();
      execSync('prisma generate');
      logger.success(`Generated Prisma client in ${Date.now() - start}ms`);
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
