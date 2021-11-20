import { Options } from 'tsup'

const config: Options = {
  splitting: false,
  format: ['esm'],
  entryPoints: [
    'src/index.ts',
    'src/plugin.ts',
  ],
  target: 'node14',
  clean: true,
  dts: true,
}

export default config