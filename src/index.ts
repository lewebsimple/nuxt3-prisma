import { execSync } from 'child_process';
import { defineNuxtModule } from '@nuxt/kit';
import logger from './logger';
import type { NuxtPrismaOptions } from './types';

export default defineNuxtModule<NuxtPrismaOptions>({
  meta: {
    name: 'nuxt3-prisma',
    configKey: 'prisma',
  },
  defaults: {},
  setup(_options, nuxt) {
    // Generate Prisma client before build
    nuxt.hook('build:before', () => {
      const start = Date.now();
      execSync('prisma generate');
      logger.success(`Generated Prisma client in ${Date.now() - start}ms`);
    });
  },
});
