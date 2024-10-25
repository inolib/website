import { forwardRef, useId, type InputHTMLAttributes } from "react";

import { cn } from "~/helpers";

import CheckIcon from "#/images/icons/check.svg";

export type ToggleField = {
  _label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type" | "value">;

export const ToggleField = forwardRef<HTMLInputElement, ToggleField>(({ _label, className, ...passthru }, ref) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2" data-field>
      <input
        className={cn("peer/input size-0 outline-none", className)}
        id={id}
        ref={ref}
        type="checkbox"
        value={_label}
        {...passthru}
      />

      <label
        className="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-blue-600 bg-blue-50 px-4 py-1 outline-none hover:bg-blue-100 peer-checked/input:bg-blue-900 peer-checked/input:text-white peer-focus-visible/input:outline-4 peer-focus-visible/input:outline-offset-4 peer-focus-visible/input:outline-blue-600 [:checked+&>svg]:block"
        htmlFor={id}
      >
        <CheckIcon className="hidden stroke-white" />
        <span>{_label}</span>
      </label>
    </div>
  );
});

ToggleField.displayName = "ToggleField";