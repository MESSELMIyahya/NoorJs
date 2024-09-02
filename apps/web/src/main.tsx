import { createRoot, renderRoot } from "@noorjs/core";
import App from "./app";

// creating the root
const root = createRoot();

// render the component
renderRoot(root, [<App />]);
