import { component$ } from "@builder.io/qwik";

type CardProps = {
  alt: string;
  content: string;
  href: string;
  styles?: string;
  title: string;
};

export const DiscoverAcessCard = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <div class={`bg-white pr-10 md:h-[18rem] md:w-[37rem] ${styles}`}>
        <div class=" md:max-w-[5rem]">
          <h2 class="font-semibold text-[#0B3168] md:ml-10 md:mt-10 md:text-3xl">{props.title}</h2>
          <p class="flex font-extralight text-[#0B3168] md:ml-10 md:mt-10">
            {props.content}
            <a href={props.href}>
              <img
                class="md:ml-4 md:mt-4 md:h-[5vh] md:w-[5vw] md:px-4"
                src="/images/icon-small-arrow.svg"
                alt={props.alt}
              />
            </a>
          </p>
        </div>
      </div>
    </>
  );
});
