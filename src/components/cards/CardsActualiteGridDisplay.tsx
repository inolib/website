import { component$ } from "@builder.io/qwik";

import { ArticleHomePage } from "./ArticleHomePage";
import { BlancArticleService } from "./BlancArticleService";

export const CardsActualiteGridDisplay = component$(() => {
  return (
    <ul class="grid grid-cols-3 grid-rows-2 gap-20 mx-[10vw]">
      <li>
        <ArticleHomePage
          alt="article 1"
          category="Accessibilité"
          date="10.03.2023"
          imgStyles="h-[14rem]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          src="/images/home7.png"
          styles="h-[10rem]"
        />
      </li>
      <li>
        <ArticleHomePage
          alt="article 2"
          category="Accessibilité"
          date="10.03.2023"
          imgStyles="h-[14rem]"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          src="/images/home2.png"
          styles="h-[10rem]"
        />
      </li>
      <li>
        <ArticleHomePage
          alt="article 3"
          category="Formation"
          date="10.03.2023"
          label="Lorem ipsum dolor."
          imgStyles="h-[14rem]"
          src="/images/home6.png"
          styles="h-[10rem]"
        />
      </li>
      <li>
        <ArticleHomePage
          alt="article 4"
          category="Inolib"
          date="10.03.2023"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          src="/images/home5.png"
          styles="h-[14rem]"
        />
      </li>
      <li>
        <ArticleHomePage
          alt="article 5"
          category="Accessibilité"
          date="10.03.2023"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          src="/images/home3.png"
          styles="h-[14rem]"
        />
      </li>
      <li>
        <BlancArticleService />
      </li>
    </ul>
  );
});
