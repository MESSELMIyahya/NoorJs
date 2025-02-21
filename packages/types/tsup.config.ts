import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./types/index.ts"],
  dts: true,
  metafile: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
