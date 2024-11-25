import type { ValidationError } from "@tanstack/react-form";
import { forwardRef, useId, type ReactNode, type TextareaHTMLAttributes } from "react";

import { cn } from "~/helpers";

export type TextAreaFieldProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "aria-describedby" | "aria-invalid" | "id"
> & {
  _errors: ValidationError[];
  _label: ReactNode;
};

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ _errors, _label, className, ...passthru }, ref) => {
    const id = useId();

    const hasError = _errors.length > 0;

    return (
      <div className="flex flex-col gap-2" data-field>
        <label className="cursor-pointer font-bold" htmlFor={id}>
          {_label}
        </label>

        <textarea
          aria-describedby={`${id}-error`}
          aria-invalid={hasError}
          className={cn(
            "rounded-lg border border-blue-600 p-2 outline-none transition-all duration-300 hover:bg-blue-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-600",
            {
              "border-red-600 focus-visible:outline-red-600": hasError,
            },
            className,
          )}
          id={id}
          ref={ref}
          {...passthru}
        />

        <p className="text-red-600" id={`${id}-error`}>
          {hasError ? (_errors[0] as string).split(", ")[0] : undefined}
        </p>
      </div>
    );
  },
);

TextAreaField.displayName = "TextAreaField";
