"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsxs = void 0;
exports.Fragment = Fragment;
exports.jsx = jsx;
function Fragment(props) {
    return function () {
        return props.children;
    };
}
function jsx(tag, props, key) {
    return JSXNodeFactory.createNode(tag, props, key);
}
var jsxs = jsx;
exports.jsxs = jsxs;
var JSXNodeFactory = {
    createNode: function (tag, props, key) {
        var children = props.children, newProps = __rest(props, ["children"]);
        return {
            tag: tag,
            props: newProps,
            children: children,
            key: key,
        };
    },
};
