/**
 * This is the eslint config for the lint-staged pre-commit hook
 */
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import customRules from './es-lint-rules/index.mjs'; // Import your custom rule

export default [
  { files: ['**/*'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: {
      'custom-rules': customRules,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'custom-rules/sort-enums': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
    },
  },
];
