module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },

        warnOnUnsupportedTypeScriptVersion: true,
      },

      plugins: ['@typescript-eslint'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
      ],

      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        'no-dupe-class-members': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        'no-undef': 'off',
        // handled by @typescript-eslint/no-useless-constructor
        'no-useless-constructor': 'off',
        // handled by @typescript-eslint/no-throw-literal
        'no-throw-literal': 'off',

        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }], // Let's try this
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/generic-type-naming': 'off',
        '@typescript-eslint/member-naming': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/naming-convention': 'off', // Need to think about this
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars-experimental': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unified-signatures': 'error',
      },
    },
  ],
};
