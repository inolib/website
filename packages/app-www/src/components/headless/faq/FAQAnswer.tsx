import { forwardRef, type HTMLAttributes } from "react";

export type FAQAnswerProps = HTMLAttributes<HTMLElement>;

export const FAQAnswer = forwardRef<HTMLElement, FAQAnswerProps>(({ ...passthru }, ref) => {
  return <dd ref={ref} {...passthru} />;
});

FAQAnswer.displayName = "FAQAnswer";
