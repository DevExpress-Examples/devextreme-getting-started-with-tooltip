module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  "rules": {
    // ...
    "react/jsx-uses-react": "off",
    'import/no-extraneous-dependencies': "off",
    "react/react-in-jsx-scope": "off"
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    excludedFiles: ['vite.config.ts', 'setupTests.ts', 'vitest.config.ts', '*.test.tsx'],
    extends: ['devextreme/react'],
    env: {
      browser: true,
      es6: true
    },
    parserOptions: {
      project: './tsconfig.app.json',
      'createDefaultProgram': true,
      'ecmaVersion': 6,
    },
    globals: {
      System: false,
      AzureGateway: false,
      AzureFileSystem: false,
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        'pragma': 'React',
        version: '16.2',
        flowVersion: '0.53',
      },
      propWrapperFunctions: [
        'forbidExtraProps',
      ],
    },
  }]
};
