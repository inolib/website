import { component$, Slot } from "@builder.io/qwik";

type ArticleProps = {
  articleTestimonyStyles?: string;
  content?: string;
  contentQuote?: string;
  imageSrc?: string;
  imageQuote?: string;
  imgSeparator?: string;
  imageText?: string;
  styles?: string;
  stylesTitle?: string;
  stylesImage?: string;
  stylesTestimony?: string;
  stylesContent?: string;
  stylesArticleGaucheFlex?: string;
  stylesArticleGauchePadding?: string;
  stylesImgArticle?: string;
  title?: string;
  titleQuote?: string;
  testimony?: string;
  typoImgQuote?: "bold" | "normal";
};

export const Article = component$((props: ArticleProps) => {
  const articleTestimonyStyles = props.articleTestimonyStyles !== undefined ? props.articleTestimonyStyles : "";
  const imgQuoteSize = props.typoImgQuote === "bold" ? "font-bold text-l" : "";
  const styles = props.styles !== undefined ? props.styles : "";
  const stylesArticleGaucheFlex = props.stylesArticleGaucheFlex !== undefined ? props.stylesArticleGaucheFlex : "";
  const stylesContent = props.stylesContent !== undefined ? props.stylesContent : "";
  const stylesImgArticle = props.stylesImgArticle !== undefined ? props.stylesImgArticle : "";
  const stylesTestimony = props.stylesTestimony !== undefined ? props.stylesTestimony : "";
  const stylesImage = props.stylesImage !== undefined ? props.stylesImage : "";
  const stylesTitle = props.stylesTitle !== undefined ? props.stylesTitle : "";

  return (
    <section class="text-[#0B3168] md:mx-[8rem] md:py-8">
      <h2 class={`mx-5 my-7 text-3xl md:mb-[1rem] ${stylesTitle} font-semibold md:m-0`}>{props.title}</h2>

      <div class={`flex flex-col ${stylesArticleGaucheFlex} md:pt-6`}>
        <div class="mx-5 md:mx-0">
          <div class={`flex ${articleTestimonyStyles} items-center`}>
            <h3 class={`mb-2 text-xl font-bold md:mb-0 ${stylesTestimony}`}>{props.testimony}</h3>
            <img class="px-2 md:px-3" src={props.imgSeparator} alt="" />
            <p class="md:text-lg">{props.titleQuote}</p>
          </div>
          <div class={`mb-14 w-full text-justify md:mb-0 md:px-4 md:pr-10 md:pl-0 md:text-left ${stylesContent}`}>
            {props.content}
            <Slot name="date&category" />
            <Slot name="check-box" />
          </div>

          <div class="-mt-10 mb-3 flex justify-center text-justify md:mb-0 md:mt-16 md:text-2xl">
            <p class="text-center md:w-[40rem] font-bold"></p>
            {props.contentQuote} <Slot name="content2" />
          </div>
        </div>
        <div class={`flex flex-col md:w-[35rem] ${stylesImgArticle}`}>
          <img class={`h-auto ${stylesImage} max-w-full`} src={props.imageSrc} alt="" />
          <blockquote class={`max-w-content my-6 text-center ${imgQuoteSize}`}>{props.imageQuote}</blockquote>
          <p class={`max-w-content text-center ${styles} ${imgQuoteSize} md:mt-6`}>{props.imageText}</p>
        </div>
      </div>
    </section>
  );
});
