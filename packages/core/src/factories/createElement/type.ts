import {
  _NoorComponentType,
  _NoorElementType,
  _NoorNodeType,
} from "@noorjs/types";

//  __The createElement function types__

// _CreateElement function type

export type _NoorCreateElementType = (
  type: string | Function | _NoorComponentType,
  props: { [key: string]: any } | null,
  ...children: _NoorNodeType[]
) => _NoorElementType;
