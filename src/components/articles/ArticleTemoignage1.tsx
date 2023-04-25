import { component$ } from "@builder.io/qwik";

import { Article } from "../Article";

export default component$(() => {
  return (
    <Article
      title="Ils nous ont fait confiance"
      testimony="Marie"
      titleQuote="Directrice marketing"
      contentQuote="“ Avec Inolib, notre site web est devenu plus accessible, touchant une audience plus large ”"
      imageSrc="\images\temoignage-1-femme.png"
      imgSeparator="\images\icon-separator-small.svg"
      stylesImgArticle="md:mr-10 scale-90"
      stylesArticleGaucheFlex="md:flex-row"
    ></Article>
  );
});
