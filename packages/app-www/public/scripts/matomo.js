// const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || "";
// const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "1";

// var _paq = (window._paq = window._paq || []);
// /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
// _paq.push(["trackPageView"]);
// _paq.push(["enableLinkTracking"]);
// (function () {
//   var u = "${MATOMO_URL}";
//   _paq.push(["setTrackerUrl", u + "matomo.php"]);
//   _paq.push(["setSiteId", "${MATOMO_SITE_ID}"]);
//   var d = document,
//     g = d.createElement("script"),
//     s = d.getElementsByTagName("script")[0];
//   g.async = true;
//   g.src = u + "matomo.js";
//   s.parentNode.insertBefore(g, s);
// })();

import Script from "next/script";

export const Matomo = () => {
  const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL;
  const siteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
  if (!matomoUrl || !siteId) return null;

  return (
    <Script
      id="matomo-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="${matomoUrl}";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '${siteId}']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `,
      }}
    />
  );
};
