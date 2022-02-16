const _ = (elementName, propertiesMap, text, children) => {
  const element = document.createElement(elementName);
  Object.entries(propertiesMap).forEach(([property, value]) => {
    element[property] = value;
  });
  if (text) element.innerText = text;
  children.forEach((child) => element.appendChild(child));
  return element;
};

export const a = (elementName, ...rest) => {
  const { propertiesMap, text, children } = rest.reduce(
    (memo, next) => {
      if (typeof next === "string") memo.text = next;
      else if (next instanceof HTMLElement) memo.children = [...memo.children, next];
      else if (typeof next === "object") memo.propertiesMap = next;

      return memo;
    },
    { propertiesMap: {}, text: null, children: [] }
  );
  return _(elementName, propertiesMap, text, children);
};

export const an = a

export const render = (what, where) => {
  const node = document.querySelector(where)
  node.innerHTML = ''
  node.appendChild(what)
}
