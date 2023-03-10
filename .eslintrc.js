module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
      },
    ],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
