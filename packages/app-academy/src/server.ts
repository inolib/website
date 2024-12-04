import { parse } from "node:url";

import { fastify } from "fastify";
import next from "next";

void (async () => {
  const env = process.env.NODE_ENV;
  const hostname = "localhost";
  const port = Number.parseInt(process.env.PORT ?? "8000", 10);

  const app = next({ dev: env === "development", hostname, port });

  await app.prepare();

  const address = await fastify()
    .register(import("@fastify/compress"))
    .all("/*", async (request, reply) => {
      await app.getRequestHandler()(request.raw, reply.raw, parse(request.url, true));
    })
    .listen({ port });

  console.log(`Server listening at ${address} (${env})`);
})();
