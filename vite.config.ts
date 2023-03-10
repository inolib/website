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
        c: path.resolve(__dirname, "./src/components"),
        h: path.resolve(__dirname, "./src/hooks"),
      },
    },
  };
});
