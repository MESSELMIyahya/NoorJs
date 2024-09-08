// Importing the core utils and types
import renderRoot from "./root/renderRoot";
import createRoot from "./root/createRoot";
import {
  ComponentObjType,
  ComponentFunType,
  ComponentFunReturnedType,
} from "./interfaces/component";
// plugs
import elementPlug from "./plugs/element";
import channelPlug from "./plugs/channel";

import ComponentCreator from "./component/creators/component-creator";

// import the NoorJs global JSX types
import "./interfaces/jsx";
import channelCreator from "./component/creators/channel-creator";

// Exporting the packages
// Core functions/utils
export {
  createRoot,
  renderRoot,
  elementPlug as element,
  channelPlug as channel,
  ComponentCreator,
  channelCreator as createChannel,
};

// Core types
export type {
  ComponentObjType as Component,
  ComponentFunType as FC,
  ComponentFunReturnedType as FCRendered,
  ComponentFunReturnedType,
};
