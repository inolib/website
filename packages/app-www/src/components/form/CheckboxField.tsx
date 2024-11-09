import type { ReadonlySignal } from "@preact/signals-react";
import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "~/helpers";

import CheckIcon from "#/images/icons/check.svg";

export type CheckboxFieldProps = {
  _error: ReadonlySignal<string>;
  _label: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "aria-describedby" | "aria-invalid" | "id" | "type">;

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ _error, _label, className, ...passthru }, ref) => {
    const id = useId();

    return (
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center gap-2">
          <input
            aria-describedby={`${id}-error`}
            aria-invalid={_error.value !== ""}
            className={cn(
              "peer/input size-6 shrink-0 cursor-pointer appearance-none rounded-md border border-blue-600 outline-none transition-all duration-200 ease-linear checked:bg-blue-900 hover:bg-blue-50 hover:checked:bg-blue-900 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-600",
              {
                "border-red-600 focus-visible:outline-red-600": _error.value !== "",
              },
              className,
            )}
            id={id}
            ref={ref}
            type="checkbox"
            {...passthru}
          />

          <div className="pointer-events-none absolute flex size-6 items-center justify-center opacity-0 transition-all duration-200 ease-linear peer-checked/input:opacity-100">
            <CheckIcon className="stroke-white" />
          </div>

          <label className="cursor-pointer" htmlFor={id}>
            {_label}
          </label>
        </div>

        <p className="text-red-600" id={`${id}-error`}>
          {_error.value}
        </p>
      </div>
    );
  },
);

CheckboxField.displayName = "CheckboxField";
