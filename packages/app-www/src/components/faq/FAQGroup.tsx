import { FAQGroup as BaseFAQGroup, type FAQGroupProps as BaseFAQGroupProps } from "~/components/headless";
import { cn } from "~/helpers";

export type FAQGroupProps = BaseFAQGroupProps;

export const FAQGroup = ({ className, ...passthru }: FAQGroupProps) => {
  return (
    <BaseFAQGroup
      className={cn("rounded-3xl transition-all duration-200 [&[data-expanded=true]]:bg-blue-50", className)}
      {...passthru}
    />
  );
};
