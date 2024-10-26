import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Banner, ContentInfo, Orejime } from "~/components/app";

import "@fontsource-variable/manrope";
import "./globals.css";
import "orejime/dist/orejime.css";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/icon.svg",
      type: "image/svg+xml",
    },
  ],
  manifest: "/manifest.webmanifest",
  robots: {
    index: false,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="fr">
      <body className="mx-auto min-w-80 max-w-[120rem] font-manrope text-lg font-medium" tabIndex={-1}>
        <div id="app">
          <Banner />

          <main id="main" tabIndex={-1}>
            {children}
          </main>

          <ContentInfo />
        </div>

        <Orejime />
      </body>
    </html>
  );
};

export default Layout;
