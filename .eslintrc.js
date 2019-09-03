module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'prettier/prettier': ['error', { 'singleQuote': true }],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }]
  },
  globals: {
    document: true,
    ENVIRONMENT_CONFIGURATION: true,
  }

};
