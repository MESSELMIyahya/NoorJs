import { PluginOption, UserConfig } from "vite";

type NoorJsType = () => PluginOption;

const NoorJs: NoorJsType = () => {
  return {
    name: "NoorJs",
    config: (c) => {
      //  custom esBuild options
      const esbuildOptions: UserConfig["esbuild"] = {
        jsxInject: "import { ComponentCreator as _h } from '@noorjs/core'",
        jsxFactory: "_h",
        // jsx: "preserve",
      };
      //   setting the JSX esBuild options to the custom options
      c.esbuild = { ...c.esbuild, ...esbuildOptions };
    },
  };
};

export default NoorJs;
// npm i @vitejs/plugin-react-swc
