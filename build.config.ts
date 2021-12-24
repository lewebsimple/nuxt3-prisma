import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: false,
    cjsBridge: true,
  },
  entries: [
    { input: 'src/index' },
  ],
  externals: [
    '@nuxt/kit',
    '@nuxt/schema',
    'consola',
  ],
});
