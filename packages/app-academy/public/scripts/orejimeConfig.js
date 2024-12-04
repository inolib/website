globalThis.orejimeConfig = {
  appElement: "#app",
  privacyPolicy: "/politique-de-confidentialite",
  apps: [
    {
      name: "hubspot-analytics",
      title: "HubSpot Analytics",
      cookies: ["__cf_bm", "__hssc", "__hssrc", "__hstc", "_cfuvid", "hubspotutk"],
      purposes: ["analytics"],
    },
  ],
  translations: {
    fr: {
      purposes: {
        analytics: "analyse et suivi",
      },
    },
  },
};
