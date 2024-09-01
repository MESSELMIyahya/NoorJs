import { ComponentCreator, createRoot, renderRoot } from "@repo/core";
import App from "./app";

// creating the root
const root = createRoot();

// render the component

renderRoot(root, [ComponentCreator(App, {}, [])]);
