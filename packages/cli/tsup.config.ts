import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  dts: true,
  minify: true,
  clean: true,
  format: ['cjs'],
  entry: ['src/index.ts'],
  external: ['react'],
  ...options,
}));
