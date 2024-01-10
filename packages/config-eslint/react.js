/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react'],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/hook-use-state': ['error', { allowDestructuredState: true }],
    'react/prop-types': 'off',
  },
};
