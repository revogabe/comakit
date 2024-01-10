/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@comaqui/eslint-config/react.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
