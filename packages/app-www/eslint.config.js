import config from "@inolib/config-eslint";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: [".next/", "dist/", "next-env.d.ts", "src/lib/strapi/api-client/"],
  },
  ...config,
];
