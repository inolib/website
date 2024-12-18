import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Banner, ContentInfo, Nav, Orejime } from "~/components/app";
import { ContentInfoTest } from "~/components/app/ContactInfoTest";
import "@fontsource-variable/manrope";
import "orejime/dist/orejime.css";
import "./globals.css";

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
    index: process.env.NODE_ENV === "production",
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html className="min-[1920px]:text-[clamp(1rem,_0.83333dvw,_2rem)]" lang="fr">
      <body className="mx-auto min-w-[320px] max-w-[3840px] font-manrope text-lg font-medium" tabIndex={-1}>
        <div id="app">
          <Banner />

          <Nav />

          <main id="main" tabIndex={-1}>
            {children}
          </main>

          <ContentInfoTest />
        </div>

        <Orejime />
      </body>
    </html>
  );
};

export default Layout;
