import { jsx, jsxs, Fragment } from './jsx'

/**
 * JSX namespace for usage with @jsxImportsSource directive
 * when ts compilerOptions.jsx is 'react-jsx'
 * https://www.typescriptlang.org/tsconfig#jsxImportSource
 */

const jsxDEV = jsx

export { jsx, jsxs, Fragment, jsxDEV }