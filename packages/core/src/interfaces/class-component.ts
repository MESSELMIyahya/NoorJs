import _NoorElementType from "./element";

// __The class component interface type__

// methods types
type _NoorClassComponentPaintMethodTtyp = () => _NoorElementType;

// class component Interface

interface _NoorClassComponentInterface {
  // paint method
  paint: _NoorClassComponentPaintMethodTtyp;
}
 


// Exporting types
export default _NoorClassComponentInterface;
