module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    extends: ['devextreme/react'],
    "rules": {
      "react/jsx-uses-react": "off",
      'import/no-extraneous-dependencies': "off",
      "react/react-in-jsx-scope": "off"
    },
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
