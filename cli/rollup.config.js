import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

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
  ],
};
