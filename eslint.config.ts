import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";

import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier/flat";

import eslintPluginPrettierCecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  { ignores: ["**/node_modules/**", "**/dist/**"] },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      stylistic.configs.recommended,
      eslintConfigPrettier,
      eslintPluginPrettierCecommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
