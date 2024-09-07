import { defineConfig } from "vite";
import NoorJs from "@noorjs/vite";
import path from "path";

export default defineConfig({
  plugins: [NoorJs()],
  resolve: {
    alias: {
      "@noorJs/core": path.resolve(__dirname, "../../packages/core"),
    },
  },
  build: {
    rollupOptions: {
      external: ["@noorJs/core"],
    },
  },
});
