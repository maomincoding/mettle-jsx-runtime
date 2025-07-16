declare function Fragment(props: any): () => any;
declare function jsx(tag: any, props: any, key: any): {
    tag: any;
    props: any;
    children: any;
    key: any;
};
declare const jsxs: typeof jsx;
export { Fragment, jsx, jsxs };
