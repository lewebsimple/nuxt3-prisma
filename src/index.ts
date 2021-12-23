import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { addPluginTemplate, addTemplate, defineNuxtModule } from '@nuxt/kit';
import { dirname, resolve } from 'pathe';
import logger from './logger';
import type { NuxtPrismaOptions } from './types';

export default defineNuxtModule<NuxtPrismaOptions>({
  meta: {
    name: 'nuxt3-prisma',
    configKey: 'prisma',
  },
  defaults: {},
  setup(_options, nuxt) {
    // Runtime path
    const __dirname__ = dirname(fileURLToPath(import.meta.url));

    // Generate Prisma client before build
    nuxt.hook('build:before', () => {
      const start = Date.now();
      execSync('prisma generate');
      logger.success(`Generated Prisma client in ${Date.now() - start}ms`);
    });

    // Add Prisma client wrapper
    addTemplate({
      filename: 'prisma-client.mjs',
      getContents: () => `
      import pkg from '@prisma/client';
      export const { PrismaClient } = pkg;
      export default prisma = new PrismaClient();
      `,
    });

    // Add Prisma client plugin
    addPluginTemplate({
      src: resolve(__dirname__, './plugin.mjs'),
    });
  },
});
