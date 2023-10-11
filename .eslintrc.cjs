module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'function-paren-newline': 'error',
    "indent": ["error", 4],
    "jsx-quotes": ["error", "prefer-double"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-expressions": "error",
  },
}
