"use client";

import {
  FAQAnswer as BaseFAQAnswer,
  useFAQGroup,
  type FAQAnswerProps as BaseFAQAnswerProps,
} from "~/components/headless";
import { cn } from "~/helpers";

export type FAQAnswerProps = BaseFAQAnswerProps;

export const FAQAnswer = ({ className, ...passthru }: FAQAnswerProps) => {
  const faqGroup = useFAQGroup();

  return (
    <div className="grid grid-rows-[0fr] transition-all duration-200 ease-linear [[data-expanded=true]_&]:grid-rows-[1fr]">
      <BaseFAQAnswer
        aria-hidden={!faqGroup.isExpanded()}
        className={cn(
          "flex flex-col gap-4 overflow-hidden px-6 pt-0 transition-all duration-200 ease-linear [[data-expanded=true]_&]:pb-6",
          className,
        )}
        {...passthru}
      />
    </div>
  );
};
