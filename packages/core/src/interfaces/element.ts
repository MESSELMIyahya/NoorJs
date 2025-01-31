// __The Element Object Type (The object that was returned by the createElement function)__

// _ELEMENT_INTERFACE *TODO - Complete the element type

interface _ELEMENT_INTERFACE {
  $$typeof: symbol; // for secret reasons (to check letter if the element is generated the NoorJs createElement method)
  props: {}; // the function or element props
  type:
    | string
    | (() => void) /* component class (will be added later *NOTE - Add Component Class Type) */; // if the this component is a html tag (e.g div,h4) or a class component
}

// Exporting the type
export default _ELEMENT_INTERFACE;
