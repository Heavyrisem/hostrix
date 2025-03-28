/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '^react(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@adminportal/(.*)$',
    '^@/(.*)$',
    '^@(.*)$',
    '^[./]',
    '.(sass|less|css)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  endOfLine: 'auto',
};
