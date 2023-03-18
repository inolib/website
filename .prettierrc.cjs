/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: [
    require("prettier-plugin-packagejson"),
    require("prettier-plugin-prisma"),
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-jsdoc"),
    require("prettier-plugin-tailwindcss"),
  ],
  printWidth: 120,
  importOrder: ["^\\~/(.*)$"],
  importOrderCaseInsensitive: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderMergeDuplicateImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
