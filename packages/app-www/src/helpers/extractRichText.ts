type StrapiRichTextChild = { text: string };
type StrapiRichTextBlock = { children?: StrapiRichTextChild[] };

export const extractRichText = (strapiField: StrapiRichTextBlock[] = []) => {
  return strapiField.map((block) => block.children?.map((child) => child.text).join("") ?? "").join(" ");
};
