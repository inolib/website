import { vercelEdgeAdapter } from "@builder.io/qwik-city/adapters/vercel-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    plugins: [vercelEdgeAdapter()],
    build: {
      outDir: "./.vercel/output/functions/_qwik-city.func",
      rollupOptions: {
        input: ["./src/entry.vercel-edge.tsx", "@qwik-city-plan"],
      },
      ssr: true,
    },
  };
});
