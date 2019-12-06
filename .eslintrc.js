module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:json/recommended'],
  plugins: ['sort-imports-es6-autofix'],
  rules: {
    curly: 'error',
    'no-console':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-mixed-operators': 'error',
    'no-param-reassign': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./*', '../*'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
};
