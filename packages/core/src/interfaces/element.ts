
// __The Element Object Type (The object that was returned by the createElement function)__

import { _NoorNodeType } from "./global";

// NoorElementInterface *TODO - Complete the element type

interface _NoorElementType {
  $$typeof: symbol; // for security reasons (to check letter if the element is generated the NoorJs createElement method)
  type: string | Function
  props: {
    children: _NoorNodeType | _NoorNodeType[];
    [key: string]: any;
  }; // the function or element props
  key: string | null; // the node key
}

// Exporting the type
export default _NoorElementType;
