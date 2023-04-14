import { defineConfig } from "vite";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import path from "path";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
        ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js",
      },
    },
  };
});
