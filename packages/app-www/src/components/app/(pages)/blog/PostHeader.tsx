type PostHeaderProps = {
  title: string;
  excerpt: string;
  categories: { id: number; name: string }[];
};

export const PostHeader = ({ title, excerpt, categories }: PostHeaderProps) => {
  return (
    <header className="mt-4">
      <div className="flex gap-2">
        {categories.map((category) => (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700" key={category.id}>
            {category.name}
          </span>
        ))}
      </div>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-600">{excerpt}</p>
    </header>
  );
};
