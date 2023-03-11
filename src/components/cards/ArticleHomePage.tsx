import { component$, Slot } from "@builder.io/qwik";
import { Button } from "../ui/buttons/Button";

type ArticleProps = {
  src: string;
  title?: string;
  content?: string;
  label: string;
  styles: string;
  styles2?: string;
  styles3?: string;
  date: string;
  category: string;
};

export const ArticleHomePage = component$((props: ArticleProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  const styles2 = props.styles !== undefined ? props.styles : "";
  const styles3 = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <span class={`text-[#0B3168] ${styles}`}>
        <img class="mb-10" src={props.src} alt="" />
        <h3 class={`${styles2} max-w-sm text-3xl`}>{props.label}</h3>
        <Slot name="content" />
        <p class={` ${styles3} mt-4 text-[11px]`}>
          {props.date}&ensp; |&ensp; {props.category}
        </p>
      </span>
    </>
  );
});
