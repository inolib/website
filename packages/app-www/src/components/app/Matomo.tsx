import Script from "next/script";

export const Matomo = () => {
  return (
    <>
      <Script src="/scripts/matomo.js" strategy="afterInteractive" />


    </>
  );
};
