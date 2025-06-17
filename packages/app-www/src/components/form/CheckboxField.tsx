import type { ValidationError } from "@tanstack/react-form";
import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "~/helpers";

import CheckIcon from "#/images/icons/check.svg";

export type CheckboxFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "aria-describedby" | "aria-invalid" | "id" | "type"
> & {
  _errors: ValidationError[];
  _label: ReactNode;
};

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ _errors, _label, className, ...passthru }, ref) => {
    const id = useId();

    const hasError = _errors.length > 0;

    return (
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center gap-2">
          <input
            aria-describedby={`${id}-error`}
            aria-invalid={hasError}
            className={cn(
              "size-6 shrink-0 cursor-pointer appearance-none rounded-md border border-blue-600 outline-none transition-all duration-300 checked:bg-blue-900 hover:bg-blue-50 hover:checked:bg-blue-900 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-600",
              {
                "border-red-600 focus-visible:outline-red-600": hasError,
              },
              className,
            )}
            id={id}
            ref={ref}
            type="checkbox"
            {...passthru}
          />

          <div className="pointer-events-none absolute flex size-6 items-center justify-center">
            <CheckIcon
              className="size-0 stroke-white transition-all duration-300 [:checked+div>&]:size-[1.125rem]"
              aria-hidden
              role="img"
            />
          </div>

          <label className="cursor-pointer" htmlFor={id}>
            {_label}
          </label>
        </div>

        <p className="text-red-600" id={`${id}-error`}>
          {hasError ? (_errors[0] as string).split(", ")[0] : undefined}
        </p>
      </div>
    );
  },
);

CheckboxField.displayName = "CheckboxField";
