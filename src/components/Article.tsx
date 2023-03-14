import { component$, Slot } from "@builder.io/qwik";

type ArticleProps = {
  title?: string;
  titleQuote?: string;
  content?: string;
  contentQuote?: string;
  imageSrc?: string;
  imageQuote?: string;
  articleTestimonyStyles?: string;
  imgSeparator?: string;
  styles?: string;
  stylesTestimony?: string;
  stylesContent?: string;
  stylesArticleGaucheFlex?: string;
  stylesArticlePadding?: string;
  stylesImgArticle?: string;
  typoImgQuote?: "bold | normal";
  testimony?: string;
  imageText?: string;
};

export const Article = component$((props: ArticleProps) => {
  const articleTestimonyStyles = props.articleTestimonyStyles !== undefined ? props.articleTestimonyStyles : "";
  const styles = props.styles !== undefined ? props.styles : "";
  const stylesTestimony = props.stylesTestimony !== undefined ? props.stylesTestimony : "";
  const stylesContent = props.stylesContent !== undefined ? props.stylesContent : "";
  const stylesArticleGaucheFlex = props.stylesArticleGaucheFlex !== undefined ? props.stylesArticleGaucheFlex : "";
  const stylesImgArticle = props.stylesImgArticle !== undefined ? props.stylesImgArticle : "";
  const imgQuoteSize = props.typoImgQuote === "bold" ? "font-bold text-l" : "";

  return (
    <article class="md:mx-[8rem] md:py-8 text-[#0B3168]">
      <h2 class={`text-2xl font-semibold `}>{props.title}</h2>

      <div class={`flex pt-6 ${stylesArticleGaucheFlex}`}>
        <span>
          <span class={`flex ${articleTestimonyStyles}`}>
            <h4 class={`font-bold text-xl ${stylesTestimony}`}>{props.testimony}</h4>
            <img class="px-4" src={props.imgSeparator} alt="" />
            <p class="text-l">{props.titleQuote}</p>
          </span>
          <div class={`md:px-4 md:pr-10 md:pl-0 md:w-[46vw] ${stylesContent}`}>
            {props.content}
            <Slot name="date&category" />
            <Slot name="check-box" />
          </div>

          <strong class="text-xl text-justify flex justify-center mt-16">
            <p class="w-[25rem] text-center">{props.contentQuote}</p>
          </strong>
        </span>
        <div class={`flex flex-col ${stylesImgArticle}`}>
          <img src={props.imageSrc} alt="" />
          <blockquote class={`mt-6 text-center max-w-content  ${imgQuoteSize}`}>{props.imageQuote}</blockquote>
          <p class={`mt-6 text-center max-w-content ${styles} ${imgQuoteSize}`}>{props.imageText}</p>
        </div>
      </div>
    </article>
  );
});
