import typescript from '@rollup/plugin-typescript';
import { fileURLToPath } from 'node:url';

export default {
  input: 'src/main.ts',
  output: {
    dir: 'output',
    format: 'es'
  },
  plugins: [typescript()],
  external: [
    fileURLToPath(
      new URL(
        "src/dv.ts",
        import.meta.url
      )
    )
  ]
};
