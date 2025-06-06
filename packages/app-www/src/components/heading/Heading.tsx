"use client";

import { createContext, useContext, useMemo, type HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";

import { tv } from "~/helpers";

const variants = tv({
  base: "flex max-w-prose flex-col",
  variants: {
    _alignment: {
      left: "self-start text-left",
      center: "self-center text-center",
      right: "self-end text-right",
    },
    _size: {
      lg: "gap-2",
      "2xl": "gap-4",
      "4xl": "gap-8",
    },
  },
});

export type HeadingObject = {
  getSize: () => NonNullable<Variants["_size"]>;
};

type Variants = VariantProps<typeof variants>;

const HeadingContext = createContext<HeadingObject | undefined>(undefined);

export const useHeading = () => {
  const header = useContext(HeadingContext);

  if (header === undefined) {
    throw new Error("Context not found");
  }

  return header;
};

export type HeadingProps = HTMLAttributes<HTMLElement> & {
  _alignment: NonNullable<Variants["_alignment"]>;
  _size: NonNullable<Variants["_size"]>;
};

export const Heading = ({ _alignment, _size, children, className, ...passthru }: HeadingProps) => {
  const heading: HeadingObject = useMemo(
    () => ({
      getSize: () => _size,
    }),
    [_size],
  );

  return (
    <HeadingContext.Provider value={heading}>
      <header className={variants({ _alignment, _size, className })} {...passthru}>
        {children}
      </header>
    </HeadingContext.Provider>
  );
};
