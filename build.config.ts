import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: false,
    cjsBridge: true,
  },
  entries: [
    { input: 'src/index' },
    { input: 'src/plugin', declaration: false },
  ],
  externals: [
    '@nuxt/kit',
    '@nuxt/schema',
    '@prisma/client',
    'consola',
    '#app',
    '#build',
    '#build/prisma-client.mjs',
  ],
});
