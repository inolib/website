import { TwoColumnsFlexLayout, type TwoColumnsFlexLayoutProps } from "~/components/layout";
import { cn } from "~/helpers";

export type HighlightsProps = TwoColumnsFlexLayoutProps & {
  _isReversed?: boolean | undefined;
};

export const Highlights = ({ _isReversed, ...passthru }: HighlightsProps) => {
  return <TwoColumnsFlexLayout className={cn({ "md:flex-row-reverse": _isReversed })} {...passthru} />;
};
