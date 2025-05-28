// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // your custom rules
      "no-unused-vars": "warn",
      "no-console": "error",
    },
  },
];
