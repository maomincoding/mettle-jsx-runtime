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
    const {children,...newProps} = props
    return {
      tag,
      props:newProps,
      children,
      key,
    };
  },
};

export {
    Fragment, jsx, jsxs
}