export default [
  "global::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:8000",
        "http://localhost:3000",
        "http://localhost:3001",
        "https://inolib.com",
        "https://www.inolib.com",
        "https://staging-api.inolib.com",
        "https://www.staging-api.inolib.com",
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
