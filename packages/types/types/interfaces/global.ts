// __The Global NoorJs Types__

import _NoorElementType from "./element";

// _NoorNodeType (the node type)
export type _NoorNodeType =
  | _NoorTextType
  | _NoorEmptyType
  | _NoorFragmentType
  | _NoorElementType
  | Array<_NoorNodeType>;

// _NoorText (the text element type)
export type _NoorTextType = string | number;

// _NoorEmpty (the empty element type)
export type _NoorEmptyType = null | void | boolean;

// _NoorFragment (the fragment type)
export type _NoorFragmentType = null | void | boolean;
