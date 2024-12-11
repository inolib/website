import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";

import { tv } from "~/helpers";

const variants = tv({
  base: "flex w-fit items-center gap-2 rounded-lg px-4 py-2 font-semibold outline-none transition-all duration-300 focus-visible:outline-4 focus-visible:outline-offset-4",
  variants: {
    _color: {
      "blue-900": "bg-blue-900 text-white hover:bg-blue-950 focus-visible:outline-blue-900",
      transparent: "bg-transparent",
      white: "bg-white text-black hover:bg-blue-50 focus-visible:outline-white",
    },
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ _color, className, type = "button", ...passthru }, ref) => {
    return <button className={variants({ _color, className })} ref={ref} type={type} {...passthru} />;
  },
);

Button.displayName = "Button";
