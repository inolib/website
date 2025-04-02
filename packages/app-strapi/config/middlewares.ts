export default [
  'global::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:8000'], 
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://inolib.com'], 
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
