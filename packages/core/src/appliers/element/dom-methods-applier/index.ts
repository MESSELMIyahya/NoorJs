import { ComponentObjType } from "../../../interfaces/component";
// Function to set the dom methods to the component this_obj

function setComponentDOMMethods(this_obj: ComponentObjType<any>) {
  const element = this_obj.ele.element!;

  // Setting the methods to call the native element.methods
  this_obj.methods.addEventListener = (...p: unknown[]) =>
    element.addEventListener.apply(element, p as any);
  this_obj.methods.after = (...p: unknown[]) =>
    element.after.apply(element, p as any);
  this_obj.methods.click = (...p: unknown[]) =>
    element.after.apply(element, p as any);
  this_obj.methods.animate = (...p: unknown[]) =>
    element.animate.apply(element, p as any);
  this_obj.methods.append = (...p: unknown[]) =>
    element.append.apply(element, p as any);
  this_obj.methods.appendChild = (...p: unknown[]) =>
    element.appendChild.apply(element, p as any) as never;
  this_obj.methods.attachInternals = (...p: unknown[]) =>
    element.attachInternals.apply(element, p as any);
  this_obj.methods.attachShadow = (...p: unknown[]) =>
    element.attachShadow.apply(element, p as any);
  this_obj.methods.before = (...p: unknown[]) =>
    element.before.apply(element, p as any);
  this_obj.methods.blur = (...p: unknown[]) =>
    element.blur.apply(element, p as any);
  this_obj.methods.checkVisibility = (...p: unknown[]) =>
    element.checkVisibility.apply(element, p as any);
  this_obj.methods.cloneNode = (...p: unknown[]) =>
    element.cloneNode.apply(element, p as any);
  this_obj.methods.closest = (...p: unknown[]) =>
    element.closest.apply(element, p as any);
  this_obj.methods.compareDocumentPosition = (...p: unknown[]) =>
    element.compareDocumentPosition.apply(element, p as any);
  this_obj.methods.computedStyleMap = (...p: unknown[]) =>
    element.computedStyleMap.apply(element, p as any);
  this_obj.methods.contains = (...p: unknown[]) =>
    element.contains.apply(element, p as any);
  this_obj.methods.dispatchEvent = (...p: unknown[]) =>
    element.dispatchEvent.apply(element, p as any);
  this_obj.methods.focus = (...p: unknown[]) =>
    element.focus.apply(element, p as any);
  this_obj.methods.getAnimations = (...p: unknown[]) =>
    element.getAnimations.apply(element, p as any);
  this_obj.methods.getAttribute = (...p: unknown[]) =>
    element.getAttribute.apply(element, p as any);
  this_obj.methods.getAttributeNS = (...p: unknown[]) =>
    element.getAttributeNS.apply(element, p as any);
  this_obj.methods.getAttributeNames = (...p: unknown[]) =>
    element.getAttributeNames.apply(element, p as any);
  this_obj.methods.getAttributeNode = (...p: unknown[]) =>
    element.getAttributeNode.apply(element, p as any);
  this_obj.methods.getAttributeNodeNS = (...p: unknown[]) =>
    element.getAttributeNodeNS.apply(element, p as any);
  this_obj.methods.getBoundingClientRect = (...p: unknown[]) =>
    element.getBoundingClientRect.apply(element, p as any);
  this_obj.methods.getClientRects = (...p: unknown[]) =>
    element.getClientRects.apply(element, p as any);
  this_obj.methods.getElementsByClassName = (...p: unknown[]) =>
    element.getElementsByClassName.apply(element, p as any);
  this_obj.methods.getElementsByTagNameNS = (...p: unknown[]) =>
    element.getElementsByTagNameNS.apply(element, p as any) as never;
  this_obj.methods.getRootNode = (...p: unknown[]) =>
    element.getRootNode.apply(element, p as any);
  this_obj.methods.setAttribute = (...p: unknown[]) =>
    element.setAttribute.apply(element, p as any);
  this_obj.methods.setAttributeNS = (...p: unknown[]) =>
    element.setAttributeNS.apply(element, p as any);
  this_obj.methods.setAttributeNode = (...p: unknown[]) =>
    element.setAttributeNode.apply(element, p as any);
  this_obj.methods.setAttributeNodeNS = (...p: unknown[]) =>
    element.setAttributeNodeNS.apply(element, p as any);
  this_obj.methods.setHTMLUnsafe = (...p: unknown[]) =>
    element.setHTMLUnsafe.apply(element, p as any);
  this_obj.methods.setPointerCapture = (...p: unknown[]) =>
    element.setPointerCapture.apply(element, p as any);
  this_obj.methods.toggleAttribute = (...p: unknown[]) =>
    element.toggleAttribute.apply(element, p as any);
  this_obj.methods.togglePopover = (...p: unknown[]) =>
    element.togglePopover.apply(element, p as any);
  this_obj.methods.hidePopover = (...p: unknown[]) =>
    element.hidePopover.apply(element, p as any);
  this_obj.methods.hasAttribute = (...p: unknown[]) =>
    element.hasAttribute.apply(element, p as any);
  this_obj.methods.hasAttributeNS = (...p: unknown[]) =>
    element.hasAttributeNS.apply(element, p as any);
  this_obj.methods.hasAttributes = (...p: unknown[]) =>
    element.hasAttributes.apply(element, p as any);
  this_obj.methods.hasChildNodes = (...p: unknown[]) =>
    element.hasChildNodes.apply(element, p as any);
  this_obj.methods.hasPointerCapture = (...p: unknown[]) =>
    element.hasPointerCapture.apply(element, p as any);
  this_obj.methods.querySelector = (...p: unknown[]) =>
    element.querySelector.apply(element, p as any);
  this_obj.methods.querySelectorAll = (...p: unknown[]) =>
    element.querySelectorAll.apply(element, p as any);
  this_obj.methods.insertAdjacentElement = (...p: unknown[]) =>
    element.insertAdjacentElement.apply(element, p as any);
  this_obj.methods.insertAdjacentHTML = (...p: unknown[]) =>
    element.insertAdjacentHTML.apply(element, p as any);
  this_obj.methods.insertAdjacentText = (...p: unknown[]) =>
    element.insertAdjacentText.apply(element, p as any);
  this_obj.methods.insertBefore = (...p: unknown[]) =>
    element.insertBefore.apply(element, p as any) as never;
  this_obj.methods.isDefaultNamespace = (...p: unknown[]) =>
    element.isDefaultNamespace.apply(element, p as any);
  this_obj.methods.isEqualNode = (...p: unknown[]) =>
    element.isEqualNode.apply(element, p as any);
  this_obj.methods.isSameNode = (...p: unknown[]) =>
    element.isSameNode.apply(element, p as any);
  this_obj.methods.lookupNamespaceURI = (...p: unknown[]) =>
    element.lookupNamespaceURI.apply(element, p as any);
  this_obj.methods.lookupPrefix = (...p: unknown[]) =>
    element.lookupPrefix.apply(element, p as any);
  this_obj.methods.remove = (...p: unknown[]) =>
    element.remove.apply(element, p as any);
  this_obj.methods.removeAttribute = (...p: unknown[]) =>
    element.removeAttribute.apply(element, p as any);
  this_obj.methods.removeAttributeNS = (...p: unknown[]) =>
    element.removeAttributeNS.apply(element, p as any);
  this_obj.methods.removeAttributeNode = (...p: unknown[]) =>
    element.removeAttributeNode.apply(element, p as any);
  this_obj.methods.removeChild = (...p: any[]) =>
    element.removeChild.apply(element, p as any) as never;
  this_obj.methods.removeEventListener = (...p: unknown[]) =>
    element.removeEventListener.apply(element, p as any);
  this_obj.methods.replaceChild = (...p: unknown[]) =>
    element.replaceChild.apply(element, p as any) as never;
  this_obj.methods.replaceChildren = (...p: unknown[]) =>
    element.replaceChildren.apply(element, p as any);
  this_obj.methods.replaceWith = (...p: unknown[]) =>
    element.replaceWith.apply(element, p as any);
  this_obj.methods.requestFullscreen = (...p: unknown[]) =>
    element.requestFullscreen.apply(element, p as any);
  this_obj.methods.requestPointerLock = (...p: unknown[]) =>
    element.requestPointerLock.apply(element, p as any);
  this_obj.methods.scroll = (...p: unknown[]) =>
    element.scroll.apply(element, p as any);
  this_obj.methods.scrollBy = (...p: unknown[]) =>
    element.scrollBy.apply(element, p as any);
  this_obj.methods.scrollIntoView = (...p: unknown[]) =>
    element.scrollIntoView.apply(element, p as any);
  this_obj.methods.scrollTo = (...p: unknown[]) =>
    element.scrollTo.apply(element, p as any);
  this_obj.methods.matches = (...p: unknown[]) =>
    element.matches.apply(element, p as any);
  this_obj.methods.prepend = (...p: unknown[]) =>
    element.prepend.apply(element, p as any);
  this_obj.methods.normalize = (...p: unknown[]) =>
    element.normalize.apply(element, p as any);
}

export default setComponentDOMMethods;
