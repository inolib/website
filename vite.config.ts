import { defineConfig } from "vite";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import path from "path";

import { createRequire } from "module";

const require = createRequire(import.meta.url);

const prismaClient = require
  .resolve("@prisma/client")
  .replace(/@prisma(\/|\\)client(\/|\\)index\.js/, ".prisma/client/index-browser.js");

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
        ".prisma/client/index-browser": path.normalize(path.relative(process.cwd(), prismaClient)),
      },
    },
  };
});
