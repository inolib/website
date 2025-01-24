export type Author = {
  id: number;
  documentId: string;
  name: string;
  bio: string;
};

export type BlogPageProps = {
  posts: BlogPost[];
  categories: Category[];
};

export type BlogPost = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tags: string[];
  author: Author;
  categories: Category[];
  image: Image;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
};

export type CategoryWithPosts = Category & { posts: BlogPost[] };

export type Image = {
  id: number;
  url: string;
  alt: string;
};

