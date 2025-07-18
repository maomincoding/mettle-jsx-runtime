export { JSX } from './jsx';

/**
 * JSX namespace for usage with @jsxImportsSource directive
 * when ts compilerOptions.jsx is 'react-jsx'
 * https://www.typescriptlang.org/tsconfig#jsxImportSource
 */

function Fragment(props) {
  return () => {
    return props.children;
  };
}
function jsx(tag, props, key) {
  return JSXNodeFactory.createNode(tag, props, key);
}
const jsxs = jsx;
const JSXNodeFactory = {
  createNode(tag, props, key) {
    const { children, ...newProps } = props;
    return {
      tag,
      props: newProps,
      children,
      key,
    };
  },
};

const jsxDEV = jsx;

export { jsx, jsxs, Fragment, jsxDEV };
