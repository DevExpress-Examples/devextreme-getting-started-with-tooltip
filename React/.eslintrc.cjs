module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    extends: ['devextreme/react'],
    env: {
      browser: true,
      es6: true
    },
    parserOptions: {
      project: './tsconfig.json',
      createDefaultProgram: true,
      ecmaVersion: 6,
    },
    globals: {
      System: false,
      AzureGateway: false,
      AzureFileSystem: false,
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        version: '17.0',
        flowVersion: '0.53',
      },
      propWrapperFunctions: [
        'forbidExtraProps',
      ],
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/vite.config.{js,ts}',
            '**/vitest.config.{js,ts}',
            '**/test/**',
            '**/*.test.{js,ts}',
            '**/*.spec.{js,ts}',
          ],
        },
      ],
    }
  }]
};
