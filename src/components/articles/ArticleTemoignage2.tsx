import { component$ } from "@builder.io/qwik";

import { Article } from "../Article";

export default component$(() => {
  return (
    <Article
      testimony="Martin"
      titleQuote="Responsable digital"
      contentQuote="Inolib nous a accompagné dans notre stratégie d'accessibilité numérique. Leur expertise a été précieuse."
      imageSrc="\images\temoignage-2-homme.png"
      stylesImgArticle="md:pr-10 scale-90"
      stylesArticleGaucheFlex="md:flex-row-reverse md:justify-end"
      imgSeparator="\images\icon-separator-small.svg"
    ></Article>
  );
});
