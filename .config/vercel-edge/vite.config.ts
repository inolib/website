import { vercelEdgeAdapter } from "@builder.io/qwik-city/adapters/vercel-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pathName = require.resolve("@prisma/client").replace("@prisma/client/index.js", "");

export default extendConfig(baseConfig, () => {
  return {
    plugins: [vercelEdgeAdapter()],
    build: {
      ssr: true,
      rollupOptions: {
        input: ["./src/entry.vercel-edge.tsx", "@qwik-city-plan"],
      },
      outDir: "./.vercel/output/functions/_qwik-city.func",
    },
    resolve: {
      alias: {
        ".prisma/client/index-browser": `${pathName}.prisma/client/index-browser.js`,
      },
    },
  };
});
