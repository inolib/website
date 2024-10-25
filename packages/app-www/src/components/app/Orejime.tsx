import Script from "next/script";

export const Orejime = () => {
  return (
    <>
      <script
        data-name="hubspot-analytics"
        data-src="/scripts/hubspot.js"
        data-type="application/javascript"
        type="opt-in"
      />

      <Script src="/scripts/orejimeConfig.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/orejime@2.3.1/dist/orejime.js" strategy="afterInteractive" />
    </>
  );
};
