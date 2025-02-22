import { PluginOption, UserConfig } from "vite";

type NoorJsType = () => PluginOption;

const NoorJs: NoorJsType = (old: boolean = false) => {
  return {
    name: "NoorJs",
    config: (c) => {
      //  custom esBuild options
      const esbuildOptions: UserConfig["esbuild"] = {
        jsxInject: `import { ${old ? "componentCreator" : "createElement"} as _h , Fragment } from '@noorjs/core'`,
        jsxFactory: "_h",
        jsxFragment: "Fragment",
        // jsx: "preserve",
      };
      //  setting the JSX esBuild options to the custom options
      c.esbuild = { ...c.esbuild, ...esbuildOptions };
    },
  };
};

export default NoorJs;
// npm i @vitejs/plugin-react-swc
