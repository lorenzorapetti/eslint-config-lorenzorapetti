const confusedGlobals = require('confusing-browser-globals');

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: ['eslint:recommended', './import.js', 'prettier'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'error',
    'callback-return': 'off',
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    complexity: ['error', 18],
    'consistent-return': 'error',
    'consistent-this': 'off',
    'default-case': 'error',
    'default-param-last': 'off',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'global-require': 'off',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': [
      'error', // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'init-declarations': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      {
        max: 2500,
        skipBlankLines: false,
        skipComments: false,
      },
    ],
    'max-lines-per-function': ['error', 150],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements': ['error', 40],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'multiline-comment-style': 'off',
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-dupe-else-if': 'off',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'off',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-requires': [
      'error',
      {
        allowCall: false,
        grouping: true,
      },
    ],
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'off',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-restricted-globals': ['error', ...confusedGlobals],
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-sync': 'off',
    'no-template-curly-in-string': 'off',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'error',
      {
        location: 'anywhere',
        terms: ['fixme'],
      },
    ],
    'object-shorthand': 'error',
    'one-var': [
      'error',
      {
        initialized: 'never',
        uninitialized: 'never',
      },
    ],
    'operator-assignment': 'off',
    'padding-line-between-statements': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],
    'prefer-exponentiation-operator': 'warn',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': 'off',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    radix: 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'error',
    strict: 'error',
    'symbol-description': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
  },
};
