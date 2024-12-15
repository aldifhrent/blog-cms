import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Example: Disable the rule for the console.log statement
      "no-console": "warn", // 'warn' instead of 'error' to allow console statements

      // Example: Enable a specific rule with a custom configuration
      "react/prop-types": "off", // Disable prop-types rule in React

      // Example: Set the indentation to 2 spaces
      indent: ["error", 2],

      // Example: Set linebreak style
      "linebreak-style": ["error", "unix"],
      "no-unused-vars": "true",
      // Add more rules as needed
    },
  },
];

export default eslintConfig;
