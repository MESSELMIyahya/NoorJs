import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  dts: true,
  metafile:true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
