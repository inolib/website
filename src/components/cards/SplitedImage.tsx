import { component$ } from "@builder.io/qwik";
import { DiscoverAcessCard } from "./DiscoverAcessCard";

type ImageProps = {
  src: string;
};

export const SplitedImage = component$((props: ImageProps) => {
  return (
    <>
      <section class="relative md:mx-[10rem] flex">
        <img src={props.src} alt="" />
        <span class="absolute md:flex md:flex-row flex flex-col">
          <DiscoverAcessCard
            styles="md:ml-[35rem] md:mt-[5rem]"
            alt="aller vers page accessibilité"
            href="/accessibilite"
            title="Découvrir l'accessibilité"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, magnam accusamus dolores soluta deserunt
          nesciunt, molestiae, architecto velit ex doloremque voluptatum eos itaque veritatis quas odit."
          />
        </span>
        <img class=" md:w-[40rem] hidden md:flex" src="images/bg-cards.png" alt="" />
      </section>
      ;
    </>
  );
});
