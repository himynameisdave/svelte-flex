module.exports = {
  root: true,
  extends: [
    'himynameisdave/configurations/core',
    'himynameisdave/configurations/typescript',
    'himynameisdave/configurations/svelte',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
    project: true,
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    'svelte/max-attributes-per-line': ['error', {
      'multiline': 1,
      'singleline': 3,
    }]
  },
};
