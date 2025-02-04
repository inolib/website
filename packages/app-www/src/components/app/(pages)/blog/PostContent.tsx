type PostContentProps = {
  content: { children: { text: string }[] }[];
};

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <section className="mt-8 space-y-4">
      {content.map((paragraph, index) => (
        <div className="rounded-lg p-4" key={index}>
          {paragraph.children.map((child, childIndex) => (
            <p className="text-lg" key={childIndex}>
              {child.text}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
};
