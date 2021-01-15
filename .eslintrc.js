module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: ['error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'no-console': 'off',
    'no-var': 0,
    'prefer-const': 'off',
  },
};
