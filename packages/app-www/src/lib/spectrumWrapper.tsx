"use client";

import { defaultTheme, Provider } from "@adobe/react-spectrum";

export const SpectrumWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider theme={defaultTheme}>{children}</Provider>;
};  