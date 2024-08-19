import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    nodeResolve(), // bundle the built-in modules of node
    commonjs(), // convert commonjs into ESmodules if needed
    typescript(),
    copy({
      // in build time update the assets folder with the work in visual-testing
      targets: [
        { src: "../visual-testing/src/components", dest: "assets/" },
        { src: "../visual-testing/src/hooks", dest: "assets/" },
        { src: "../visual-testing/src/types", dest: "assets/" },
      ],
    }),
  ],
};
