import { component$ } from "@builder.io/qwik";

import { ArticleHomePage } from "./ArticleHomePage";

type ArticleProps = {
  category?: string;
  content?: string;
  date?: string;
  label?: string;
  src?: string;
  styles?: string;
  title: string;
};

export const ArticlesHomeDisplay = component$((props: ArticleProps) => {
  return (
    <>
      <span class="md:mt-20 md:ml-[9rem] ml-[1rem] flex justify-start">
        <h2 class="text-4xl text-[#0B3168] font-medium mt-10">{props.title}</h2>
      </span>
      <span class="md:grid-md:col-2 md:grid-row-2- md:mt-14 md:grid">
        <ArticleHomePage
          src="/images/home1.png"
          styles="md:col-end-1 md:ml-[8vw] md:w-[40vw]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Développement"
          date="20.06.2023"
          alt=""
        >
          <p q:slot="content" class="max-w-md text-[#0B3168]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est id, facilis veritatis repudiandae nobis eius
            magnam non libero a dolor recusandae obcaecati similique eligendi magni aliquid nisi illum nemo explicabo.
          </p>
        </ArticleHomePage>
        <ArticleHomePage
          src="/images/home2.png"
          styles="md:col-end-2 md:mr-[6rem]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Accessibilité"
          date="10.03.2023"
          alt=""
        />
        <ArticleHomePage
          src="/images/home3.png"
          styles="md:col-end-2 md:mr-[6rem] md:-mt-[5rem]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Accessibilité"
          date="03.02.2023"
          alt=""
        />
        <a
          aria-label="lien vers notre actualité"
          class="mr-[8rem] -mt-[18rem] ml-[8rem] pt-8 border-t border-slate-300 md:flex hidden justify-end font-normal text-[#0B3168]"
          href="/actualites"
        >
          Voir toute notre actualité
          <img
            class="mt-[0.8vh] h-[2vh] w-[2vw]"
            src="/images/icon-small-arrow.svg"
            alt="lien vers page accessibilité"
          />
        </a>
      </span>
    </>
  );
});
