module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
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
  plugins: ["react"],
  rules: {
    semi: "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": [2, 4],
    indent: "off",
    "@typescript-eslint/indent": [2, 4],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": [2, { ignoreVoid: true }],
  },
  ignorePatterns: [".eslintrc.js"],
};
