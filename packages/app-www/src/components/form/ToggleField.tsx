import { forwardRef, useId, type InputHTMLAttributes } from "react";

import { cn } from "~/helpers";

import CheckIcon from "#/images/icons/check.svg";

export type ToggleField = Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type" | "value"> & {
  _label: string;
};

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
        className="flex w-fit cursor-pointer items-center rounded-full border border-blue-600 bg-blue-50 px-4 py-1 outline-none transition-all duration-300 hover:bg-blue-100 peer-checked/input:bg-blue-900 peer-checked/input:text-white peer-focus-visible/input:outline-4 peer-focus-visible/input:outline-offset-4 peer-focus-visible/input:outline-blue-600"
        htmlFor={id}
      >
        <CheckIcon className="size-0 stroke-white opacity-0 transition-all duration-300 [:checked+label>&]:mr-2 [:checked+label>&]:size-[1.125rem] [:checked+label>&]:opacity-100" />
        <span>{_label}</span>
      </label>
    </div>
  );
});

ToggleField.displayName = "ToggleField";
