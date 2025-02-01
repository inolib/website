export type Author = {
  id: number;
  documentId: string;
  name: string;
  bio?: string;
  createdAt: string;
  updatedAt?: string;
  publishedAt?: string;
  website?: string;
  avatar: Image;
};

export type BlogPageProps = {
  posts: BlogPost[];
  categories: Category[];
  pagination: Pagination;
};

export type BlogPost = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentParagraph[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tags: string[];
  author: Author;
  categories: Category[];
  image: Image[];
};

export type Category = {
  id: number;
  name: string;
  slug?: string;
  description?: string;
};

export type CategoryWithPosts = Category & { posts: BlogPost[] };

export type ContentChild = {
  type: string;
  text: string;
};

export type ContentParagraph = {
  type: string;
  children: ContentChild[];
};

export type Image = {
  id: number;
  url: string;
  alternateText: string;
};

export type PaginatedBlogPosts = {
  posts: BlogPost[];
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
