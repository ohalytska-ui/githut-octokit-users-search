import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'no-duplicate-imports': 'error',
      'no-nested-ternary': 'warn',
      curly: 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
        pragma: 'React',
        fragment: 'Fragment',
      },
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
