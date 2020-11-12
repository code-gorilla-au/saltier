module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb',
  ],
  rules: {
    'operator-linebreak': ['error', 'after'],
    'object-curly-newline': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  ignorePatterns: [
    '/dist',
  ],
};
