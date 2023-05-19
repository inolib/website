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
      <span class="ml-[1rem] flex justify-start md:mt-20 md:ml-[9rem]">
        <h2 class="mt-10 text-4xl font-medium text-[#0B3168]">{props.title}</h2>
      </span>
      <span class="md:grid-md:col-2 md:grid-row-2- md:mt-14 md:grid">
        <p q:slot="content" class="max-w-md text-[#0B3168]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est id, facilis veritatis repudiandae nobis eius
          magnam non libero a dolor recusandae obcaecati similique eligendi magni aliquid nisi illum nemo explicabo.
        </p>

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
      </span>
    </>
  );
});
