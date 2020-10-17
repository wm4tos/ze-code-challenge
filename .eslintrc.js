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
    'airbnb',
    'plugin:security/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    semi: ['error', 'never'],
    'simple-import-sort/sort': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'max-len': [
      2,
      {
        code: 135,
      },
    ],
    'jsx-a11y/aria-role': [2, {
      ignoreNonDOM: true,
    }],
    'react/jsx-props-no-spreading': 'off',
  },
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['config', './config'],
          ['services', './src/services'],
          ['constants', './src/constants'],
          ['atoms', './src/components/atoms'],
          ['molecules', './src/components/molecules'],
          ['organisms', './src/components/organisms'],
          ['pages', './src/components/pages'],
          ['templates', './src/components/templates'],
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.jsx',
    ],
  },
}
