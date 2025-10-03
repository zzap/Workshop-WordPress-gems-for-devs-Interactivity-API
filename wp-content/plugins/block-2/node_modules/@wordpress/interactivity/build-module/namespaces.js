const namespaceStack = [];
export const getNamespace = () => namespaceStack.slice(-1)[0];
export const setNamespace = namespace => {
  namespaceStack.push(namespace);
};
export const resetNamespace = () => {
  namespaceStack.pop();
};
//# sourceMappingURL=namespaces.js.map