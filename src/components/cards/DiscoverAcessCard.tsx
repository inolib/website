import { component$ } from "@builder.io/qwik";

export const DiscoverAcessCard = component$((props: CardProps) => {
  type CardProps = {
    title: string;
    content: string;
    styles?: string;
    href: string;
    alt: string;
  };

  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <div class={`bg-white w-[37rem] h-[18rem] pr-10 ${styles}`}>
        <span class=" max-w-[5vw]">
          <h2 class="text-[#0B3168] text-3xl ml-10 mt-10 font-semibold">{props.title}</h2>
          <p class="text-[#0B3168] ml-10 mt-10 font-extralight flex">
            {props.content}
            <a href={props.href}>
              <img class="w-[5vw] h-[5vh] ml-4 mt-4 px-4" src="/images/icon-small-arrow.svg" alt={props.alt} />
            </a>
          </p>
        </span>
      </div>
    </>
  );
});
