// @ts-check

import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  ...tseslint.configs.strict,
  eslintPluginPrettierRecommended,
);
