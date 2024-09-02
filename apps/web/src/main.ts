import { ComponentCreator, createRoot, renderRoot } from "@noorjs/core";
import App from "./app";

// creating the root
const root = createRoot();

// render the component

renderRoot(root, [ComponentCreator(App,null,'')]);

const a = ComponentCreator('p',null,null,null,null)

/*

 => nullable props * in-progress
 => not required children 
 => children to params not array



*/