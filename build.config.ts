import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: false,
    cjsBridge: true,
  },
  entries: [
    { input: 'src/module' },
  ],
  externals: [
    '@nuxt/schema',
    'consola',
  ],
});
