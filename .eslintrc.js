module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  plugins: [
    'jest',
    'security',
    'jsx-a11y',
    'simple-import-sort',
  ],
  extends: [
    'airbnb-base',
    'plugin:security/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    semi: ['error', 'never'],
    'simple-import-sort/sort': 'error',
    'import/extensions': 2,
    'import/no-unresolved': 2,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 1,
    'max-len': [
      2,
      {
        code: 135,
      },
    ],
    'jsx-a11y/aria-role': [2, {
      ignoreNonDOM: true,
    }],
  },
  env: {
    'jest/globals': true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['services', './src/services'],
          ['config', './config'],
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.jsx',
    ],
  },
}
