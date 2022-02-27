const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'import',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'src')],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'no-param-reassign': ['error', {
      props: false
    }],
    quotes: [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'import/no-unresolved': ['off'],
    'no-underscore-dangle': 0,
    'global-require': 0,
    'import/extensions': ['off', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'class-methods-use-this': 0,
    'vue/attributes-order': 0,
    'arrow-parens': 0,
    'import/order': 0
  }
};
