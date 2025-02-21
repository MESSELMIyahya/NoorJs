import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: [
    "./src/index.ts",
    "./src/global/index.ts",
    "./src/symbols/index.ts",
    "./src/enums/index.ts",
  ],
  dts: true,
  metafile: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
