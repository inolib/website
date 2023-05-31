import { component$ } from "@builder.io/qwik";

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
      <div class="ml-[1rem] flex justify-start md:mt-20 md:ml-[9rem]">
        <h2 class="mt-10 text-4xl font-medium text-[#0B3168]">{props.title}</h2>
      </div>
      <div class="md:grid-md:col-2 md:grid-row-2- md:mt-14 md:grid">
        <ArticleHomePage
          src="/images/home1.png"
          styles="md:col-end-1 md:ml-[8vw] md:w-[40vw]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Développement"
          date="20.Juin.2023"
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
          date="10.Mars.2023"
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
          class="mr-[8rem] -mt-[18rem] ml-[8rem] hidden justify-end border-t border-slate-300 pt-8 font-normal text-[#0B3168] md:flex"
          href="/actualites"
        >
          Voir toute notre actualité
          <img
            class="mt-[0.8vh] h-[2vh] w-[2vw]"
            src="/images/icon-small-arrow.svg"
            alt="lien vers page accessibilité"
          />
        </a>
      </div>
    </>
  );
});
