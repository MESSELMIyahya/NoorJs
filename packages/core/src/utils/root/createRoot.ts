import NJFError from "../error/createError";

// create root returned type

interface CreatedRootElement {
  id: string;
  element: HTMLElement;
}

// The create root function

function createRoot(rootElement?: HTMLElement): CreatedRootElement {
  // if the window object is undefined
  if (window == undefined) throw new NJFError("window object is undefined");
  const id = "root";
  const element: HTMLElement | HTMLDivElement = rootElement
    ? rootElement
    : document.createElement("div");
  // setting the id to the element
  element.id = id;
  // add the root element to the document body
  window.document.body.appendChild(element);
  return {
    id,
    element,
  };
}

export { createRoot, type CreatedRootElement };
