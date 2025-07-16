"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsxDEV = exports.Fragment = exports.jsxs = exports.jsx = void 0;
var jsx_1 = require("./jsx");
Object.defineProperty(exports, "jsx", { enumerable: true, get: function () { return jsx_1.jsx; } });
Object.defineProperty(exports, "jsxs", { enumerable: true, get: function () { return jsx_1.jsxs; } });
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return jsx_1.Fragment; } });
/**
 * JSX namespace for usage with @jsxImportsSource directive
 * when ts compilerOptions.jsx is 'react-jsx'
 * https://www.typescriptlang.org/tsconfig#jsxImportSource
 */
var jsxDEV = jsx_1.jsx;
exports.jsxDEV = jsxDEV;
