import { component$ } from "@builder.io/qwik";

import { Article } from "../Article";

export default component$(() => {
  return (
    <Article
      title="Ils nous ont fait confiance"
      testimony="Marion Rodrigue"
      titleQuote="CEO Fakecompagny"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis, sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis, sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor urna viverra, tincidunt neque."
      contentQuote="“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ”"
      imageSrc="\images\temoignage-1-femme.png"
      imgSeparator="\images\icon-separator-small.svg"
      stylesImgArticle="md:mr-10"
      stylesArticleGaucheFlex="md:flex-row"
    ></Article>
  );
});
