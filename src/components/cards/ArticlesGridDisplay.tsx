import { component$, Slot } from "@builder.io/qwik";
import { Button } from "../ui/buttons/Button";
import { ArticleHomePage } from "./ArticleHomePage";

export const ArticlesGridDisplay = component$((props: ArticleProps) => {
  type ArticleProps = {
    src: string;
    title: string;
    content: string;
    label: string;
    styles?: string;
    date: string;
    category: string;
  };

  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <span class="flex justify-start mt-20 ml-[9vw]">
        <h2 class="text-[#0B3168] font-normal text-4xl">{props.title}</h2>
      </span>
      <span class="grid grid-col-2 grid-row-2- mt-14">
        <ArticleHomePage
          src="/images/home1.png"
          styles="col-end-1 ml-[8vw] w-[40vw]"
          styles2="mb-10"
          styles3="pb-[5vh]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Développement"
          date="20.06.2023"
        >
          <p q:slot="content" class="max-w-md text-[#0B3168]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est id, facilis veritatis repudiandae nobis eius
            magnam non libero a dolor recusandae obcaecati similique eligendi magni aliquid nisi illum nemo explicabo.
          </p>
        </ArticleHomePage>
        <ArticleHomePage
          src="/images/home2.png"
          styles="col-end-2 mr-[6rem]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Accessibilité"
          date="10.03.2023"
        />
        <ArticleHomePage
          src="/images/home3.png"
          styles="col-end-2 mr-[6rem]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Accessibilité"
          date="03.02.2023"
        />
        <a
          aria-label="lien vers pas actualité"
          class="flex justify-end mr-[8vw] -mt-[20rem] font-semibold text-[#0B3168]"
          href="/actualites"
        >
          Voir toute notre actualité{" "}
          <img
            class="w-[2vw] h-[2vh] mt-[0.8vh]"
            src="/images/icon-small-arrow.svg"
            alt="lien vers page accessibilité"
          />
        </a>
      </span>
    </>
  );
});
