module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
    'jsx-a11y',
    'unused-imports',
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // eslint ----------------------------------
    // objectの.以外のアクセスを許可する
    'dot-notation': 'off',

    'class-methods-use-this': 'off',

    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',

    // for ofのみ許可
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // typescript-eslint ----------------------------------
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',

    // React Hooks ----------------------------------
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // React ----------------------------------
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // TODO: 新しいバージョンだとエラーが出るので一時的にOFFに変更
    'react/jsx-key': 'off',

    // Next ----------------------------------
    // SSGがnext/imageに対応していないため
    '@next/next/no-img-element': 'off',

    // jsx-a11y ----------------------------------
    'jsx-a11y/anchor-is-valid': 'off',

    // plugin ----------------------------------
    // 不要なimportを削除
    'unused-imports/no-unused-imports-ts': 'warn',
    // import順の設定
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          // styles
          // 最後尾にしたいのでgroupをindex扱いにする
          { pattern: './**.module.scss', group: 'index', position: 'before' },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['src/pages/_document.tsx'],
      rules: {
        'react/no-danger': 'off',
      },
    },
    {
      files: ['*.stories.tsx', 'src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.mock.ts'],
      rules: {
        'max-lines': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: require('./package.json').dependencies.react,
    },
  },
};
