module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.{js,cjs}",
        "jest.config.{js,cjs,ts}",
        "**/src/**/*.test.{ts,tsx}",
      ],
      rules: {
        "i18next/no-literal-string": "off",
      },
      parserOptions: {
        sourceType: "script",
        project: ["./tsconfig.json"],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint", "i18next", "eslint-plugin-react-hooks"],
  rules: {
    semi: "always",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": [2, 4],
    indent: "off",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/indent": [2, 4],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": [2, { ignoreVoid: true }],
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: ["data-testid", "to"],
      },
    ],
    // Core hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

  },
  ignorePatterns: [".eslintrc.js", "**/**.test.tsx", "node_modules"],
};
