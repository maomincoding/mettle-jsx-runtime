import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './jsx-runtime/index.ts',
  output: [
    {
      file: './jsx-runtime/index.js',
      format: 'cjs'
    },
    {
      file: './jsx-runtime/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    commonjs(),
    typescript({
      compilerOptions: {
        paths: {}
      }
    })
  ]
}
