"use client";

import { useCallback, useState, type MouseEventHandler } from "react";

import { Button } from "~/components/button";
import { FullBleedSection } from "~/components/section";
import { cn } from "~/helpers";

import PlayIcon from "#/images/icons/play.svg";
import StopIcon from "#/images/icons/stop.svg";

export const ScrollingText = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setIsRunning((isRunning) => !isRunning);
  }, []);

  return (
    <FullBleedSection className="relative flex overflow-hidden bg-blue-950 py-4 text-3xl text-yellow-500">
      <Button
        _color="transparent"
        className="group/button absolute left-0 top-0 z-10 size-full rounded-none p-0"
        onClick={handleClick}
        title={isRunning ? "Stopper l’animation" : "Démarrer l’animation"}
      >
        <span className="inline-flex size-[4.34375rem] items-center justify-center bg-blue-950">
          <PlayIcon
            aria-label="Démarrer l’animation"
            className={cn(
              "size-9 rounded-md stroke-yellow-500 outline-none group-focus-visible/button:outline-4 group-focus-visible/button:outline-offset-2 group-focus-visible/button:outline-yellow-500",
              { hidden: isRunning },
            )}
          />
          <StopIcon
            aria-label="Stopper l’animation"
            className={cn(
              "size-9 rounded-md stroke-yellow-500 outline-none group-focus-visible/button:outline-4 group-focus-visible/button:outline-offset-2 group-focus-visible/button:outline-yellow-500",
              { hidden: !isRunning },
            )}
          />
        </span>
      </Button>

      {[...Array.from({ length: 5 }).keys()].map((index) => (
        <div
          aria-hidden={index > 0 ? true : undefined}
          className={cn("shrink-0 animate-marquee", { "[animation-play-state:paused]": !isRunning })}
          key={index}
          data-marquee
        >
          <span className="shrink-0 px-2">INOLIB</span>
          <span className="px-2" aria-hidden>
            –
          </span>
          <span className="shrink-0 px-2">De l’idée à la réalisation pour un numérique accessible</span>
          <span className="px-2" aria-hidden>
            –
          </span>
        </div>
      ))}
    </FullBleedSection>
  );
};
