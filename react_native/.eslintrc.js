module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 0,
        'eol-last': 0,
        'no-trailing-spaces': 0,
        semi: 0,
        quotes: 0,
      },
    },
  ],
};
