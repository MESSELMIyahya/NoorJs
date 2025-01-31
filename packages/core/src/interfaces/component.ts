import _ELEMENT_INTERFACE from "./element";

// __The class component interface type__

// methods types
type CLASS_COMPONENT_PAINT_METHOD_TYPE = () => _ELEMENT_INTERFACE;

// class component Interface

interface CLASS_COMPONENT_INTERFACE {
  // paint method
  paint: CLASS_COMPONENT_PAINT_METHOD_TYPE;
}

// Exporting types
export default CLASS_COMPONENT_INTERFACE;
