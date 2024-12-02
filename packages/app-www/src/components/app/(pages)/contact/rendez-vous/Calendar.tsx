"use client";

import { useEffect } from "react";

export const Calendar = () => {
  useEffect(() => {
    const script = globalThis.document.createElement("script");

    script.defer = true;
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

    globalThis.document.body.append(script);
  }, []);

  return (
    <>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings-eu1.hubspot.com/meetings/djeberine?embed=true"
      />
    </>
  );
};
