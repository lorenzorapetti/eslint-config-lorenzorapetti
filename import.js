module.exports = {
  plugins: ['import'],

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },

  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
  },

  rules: {
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-cycle': 'warn',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'off',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', ['external', 'internal'], 'parent', ['sibling', 'index']],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
  },
};
