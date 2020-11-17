// Library build configuration.
import resolve from '@rollup/plugin-node-resolve';
import typescriptPlugin from 'rollup-plugin-typescript2';
import inputs from './gen/files';

export default {
  // Specify entries of your library, so that Rollup
  // can figure out their inter-dependencies.
  input: inputs,
  external: ['react'],
  output: [
    {
      // Bundle into ESM for modern consumers.
      // Only ESM build can currently be tree-shaken.
      dir: 'dist/esm',
      format: 'esm',
    },
    {
      // Bundle into CJS for other consumers.
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [resolve(), typescriptPlugin()],
};
