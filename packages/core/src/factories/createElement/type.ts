import { _NoorElementType, _NoorNodeType } from "../../interfaces";
import { _NoorComponentType } from "../../interfaces/component";

//  __The createElement function types__

// _CreateElement function type

export type _NoorCreateElementType = (
  type: string | Function | _NoorComponentType,
  props: { [key: string]: any } | null,
  ...children: _NoorNodeType[]
) => _NoorElementType;
