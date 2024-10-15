import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      semi: 'error',
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'no-duplicate-imports': 'error',
      'no-nested-ternary': 'warn',
      curly: 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
  { extends: ['react-app'] },
  { plugins: ['prettier'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
