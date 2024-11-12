import { parse } from "node:url";

import { fastifyCompress } from "@fastify/compress";
import { fastify } from "fastify";
import next from "next";

void (async () => {
  const env = process.env.NODE_ENV;
  const hostname = "localhost";
  const port = Number.parseInt(process.env.PORT ?? "8000", 10);

  const app = next({ dev: env === "development", hostname, port });

  await app.prepare();

  const server = fastify();

  server.register(fastifyCompress);

  server.all("/*", async (request, reply) => {
    await app.getRequestHandler()(request.raw, reply.raw, parse(request.url, true));
  });

  const address = await server.listen({ port });

  console.log(`Server listening at ${address} (${env})`);
})();
