import { component$, Slot } from "@builder.io/qwik";

type NewArticleProps = {
  style?: string;
  styleTitle?: string;
  styleArticle?: string;
  styleArticleContent?: string;
  styleContent?: string;
  styleImage?: string;
  styleImageArticle?: string;
  styleImageText?: string;
  styleImageQuote?: string;
  title: string;
  content?: string;
  imageSrc?: string;
};

export const NewArticle = component$((props: NewArticleProps) => {
  const style = props.style !== undefined ? props.style : "";
  const styleTitle = props.styleTitle !== undefined ? props.styleTitle : "";
  const styleArticle = props.styleArticle !== undefined ? props.styleArticle : "";
  const styleArticleContent = props.styleArticleContent !== undefined ? props.styleArticleContent : "";
  const styleContent = props.styleContent !== undefined ? props.styleContent : "";
  const styleImage = props.styleImage !== undefined ? props.styleImage : "";
  const styleImageArticle = props.styleImageArticle !== undefined ? props.styleImageArticle : "";
  const styleImageText = props.styleImageText !== undefined ? props.styleImageText : "";
  const styleImageQuote = props.styleImageQuote !== undefined ? props.styleImageQuote : "";

  return (
    <section class={`${style}`}>
      <h2 class={`${styleTitle}`}>{props.title}</h2>

      <div class={`${styleArticle}`}>
        <div class={`${styleArticleContent}`}>
          <div class={`${styleContent}`}>
            {props.content}
            <Slot name="slot1" />
          </div>
        </div>

        <div class={`${styleImageArticle}`}>
          <img class={`${styleImage}`} src={props.imageSrc} />
          <blockquote class={`${styleImageQuote}`}></blockquote>
          <p class={`${styleImageText}`}></p>
        </div>
      </div>
    </section>
  );
});
