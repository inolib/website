import type { Core } from '@strapi/types';

const logger: Core.MiddlewareFactory = (_, { strapi }) => {
  return async (context, next) => {
    const start = Date.now();
    await next();
    const delta = Math.ceil(Date.now() - start);

    if (context.method !== 'HEAD') {
      strapi.log.http(`${context.method} ${context.url} (${delta} ms) ${context.status}`);
    }
  };
};

export default logger;
