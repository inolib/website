import { component$ } from "@builder.io/qwik";

import { ArticleHomePage } from "./ArticleHomePage";
import { BlancArticleService } from "./BlancArticleService";

export const CardsActualiteGridDisplay = component$(() => {
  return (
    <ul class="grid grid-cols-3 grid-rows-2 gap-20 mx-[10vw]">
      <li>
        <ArticleHomePage
          src="/images/home7.png"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Accessibilité"
          date="10.03.2023"
          styles="h-[10rem]"
          imgStyles="h-[14rem]"
          alt="article 1"
        />
      </li>
      <li>
        <ArticleHomePage
          src="/images/home2.png"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Accessibilité"
          date="10.03.2023"
          styles="h-[10rem]"
          imgStyles="h-[14rem]"
          alt="article 2"
        />
      </li>
      <li>
        <ArticleHomePage
          src="/images/home6.png"
          label="Lorem ipsum dolor."
          category="Formation"
          date="10.03.2023"
          styles="h-[10rem]"
          imgStyles="h-[14rem]"
          alt="article 3"
        />
      </li>
      <li>
        <ArticleHomePage
          src="/images/home5.png"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Inolib"
          date="10.03.2023"
          styles="h-[14rem]"
          alt="article 4"
        />
      </li>
      <li>
        <ArticleHomePage
          src="/images/home3.png"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          category="Accessibilité"
          date="10.03.2023"
          styles="h-[14rem]"
          alt="article 5"
        />
      </li>
      <li>
        <BlancArticleService />
      </li>
    </ul>
  );
});
