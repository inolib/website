import { component$ } from "@builder.io/qwik";

type CardProps = {
  title: string;
  content: string;
  styles?: string;
  href: string;
  alt: string;
};

export const DiscoverAcessCard = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <div class={`h-[18rem] w-[37rem] bg-white pr-10 ${styles}`}>
        <span class=" max-w-[5vw]">
          <h2 class="ml-10 mt-10 text-3xl font-semibold text-[#0B3168]">{props.title}</h2>
          <p class="ml-10 mt-10 flex font-extralight text-[#0B3168]">
            {props.content}
            <a href={props.href}>
              <img class="ml-4 mt-4 h-[5vh] w-[5vw] px-4" src="/images/icon-small-arrow.svg" alt={props.alt} />
            </a>
          </p>
        </span>
      </div>
    </>
  );
});
