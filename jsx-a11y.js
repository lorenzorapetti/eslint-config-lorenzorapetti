module.exports = {
  plugins: ['jsx-a11y'],

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['plugin:jsx-a11y/recommended'],

  rules: {
    'jsx-a11y/lang': 'error',
  },
};
