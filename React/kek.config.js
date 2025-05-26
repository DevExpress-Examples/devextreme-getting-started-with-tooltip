// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )


import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJest from 'eslint-plugin-jest';
import spellCheckConfig from 'eslint-config-devextreme/spell-check.js';
import reactConfig from 'eslint-config-devextreme/react.js';
import jestConfig from 'eslint-config-devextreme/jest.js';
console.log('spellCheckConfig', spellCheckConfig);
/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Base spell check config
 
  // React + TypeScript config
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
    //  parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 6,
        createDefaultProgram: true,
      },
      globals: {
        System: 'readonly',
        AzureGateway: 'readonly',
        AzureFileSystem: 'readonly',
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        version: '16.2',
        flowVersion: '0.53',
      },
      propWrapperFunctions: ['forbidExtraProps'],
    },
    rules: {
      // Include rules from the devextreme/react config
      ...reactConfig.rules,
    },
  },

  // Jest-specific overrides
  {
    files: ['**/*.test.tsx'],
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      ...jestConfig.rules,
    },
  },
];
