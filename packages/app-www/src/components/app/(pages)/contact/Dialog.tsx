import { useCallback, useEffect, useId, useRef, type DialogHTMLAttributes, type MouseEventHandler } from "react";

import { Button } from "~/components/button";
import { cn } from "~/helpers";

import XCloseIcon from "#/images/icons/x-close.svg";

type DialogProps = {
  _message: string;
} & Omit<DialogHTMLAttributes<HTMLDialogElement>, "aria-describedby" | "aria-label" | "aria-modal">;

export const Dialog = ({ _message, className, role = "dialog", ...passthru }: DialogProps) => {
  const id = useId();
  const ref = useRef<HTMLDialogElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    ref.current?.close();
  }, []);

  useEffect(() => {
    if (_message === "") {
      ref.current?.close();
    } else {
      ref.current?.showModal();
    }
  }, [_message]);

  return (
    <dialog
      aria-describedby={`${id}-message`}
      aria-label={role === "dialog" ? "Confirmation" : "Erreur"}
      className={cn(
        "relative items-center justify-center rounded-3xl bg-white p-24 backdrop:backdrop-blur-sm backdrop:backdrop-brightness-50 open:flex",
        className,
      )}
      ref={ref}
      role={role}
      aria-modal
      {...passthru}
    >
      <Button _color="white" className="absolute right-4 top-4 focus-visible:outline-black" onClick={handleClick}>
        <span>Fermer</span>
        <XCloseIcon className="stroke-black" />
      </Button>

      <p className="text-2xl" id={`${id}-message`}>
        {_message}
      </p>
    </dialog>
  );
};
